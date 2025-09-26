import {
  BaseJavaCstVisitorWithDefaults,
  type CstNode,
  type ImportDeclarationCtx,
  type PackageDeclarationCtx,
  type ClassModifierCtx,
  type TypeIdentifierCtx,
  type ElementValueCtx,
  type MethodDeclarationCtx,
  type MethodModifierCtx,
  type VariableParaRegularParameterCtx,
  type ResultCtx,
  ElementValuePairCtx,
  ElementValuePairListCtx,
} from "java-parser";
import { encryptionClassName, getImage, importToNames } from ".";
import { ApiInfo, ImportName } from "@/type";

interface ClassModifier {
  typeName?: string;
  config?: Record<string, string>;
}

interface ControllerBaseInfo {
  classModifiers?: ClassModifier[];
  url?: string;
  comment?: string;
  className?: string;
}

interface ElementValueParam {
  classTypeName?: string;
  fieldIndex?: number;
  fieldTypeName?: string;
  valuePair?: string;
}

/**
 * @path_package
 * key: com.*.*.*.<className>
 * value: <packagePath>
 * @packageMappings
 * key: JAVA类型
 * value: TS类型
 * JAVA类型到TS的映射配置
 * @importsNames
 * key: com.*.*.*.<className>
 *
 */
export class ParserController extends BaseJavaCstVisitorWithDefaults {
  // 用于记录所有类名对应的包路径，便于后期解析 import
  private path_package: Record<string, string>;

  // JAVA类型到TS的映射配置
  private packageMappings: { [key: string]: string };

  // 最终解析出来的接口信息
  apiInfos: ApiInfo[] = [];

  // 用于记录当前文件的 import 类名，便于后期解析类型
  // 包括类名、路径、同文件夹下的类
  private importsNames?: Set<string>;

  // 用于记录需要解析的类
  needParserNames: Map<string, ImportName>;

  // 用于记录无法解析的类（比如来自jar包的import）
  canNotParseNames: Set<string>;

  // 当前解析的代码
  private code: string = "";

  // 当前类的基础信息
  private baseInfo?: ControllerBaseInfo;

  private POST_MAPPING = {
    GetMapping: "get",
    PostMapping: "post",
    PutMapping: "put",
    DeleteMapping: "del",
    PatchMapping: "patch",
  };

  private REQUEST_MAPPING = [
    "ApiOperation",
    "GetMapping",
    "PostMapping",
    "PutMapping",
    "DeleteMapping",
    "PatchMapping",
  ];

  constructor({
    path_package,
    packageMappings,
  }: {
    path_package: Record<string, string>;
    packageMappings: { [key: string]: string };
  }) {
    super();
    this.path_package = path_package;
    this.packageMappings = packageMappings;
    this.needParserNames = new Map<string, ImportName>();
    this.canNotParseNames = new Set();
    this.apiInfos = [];
    this.importsNames = new Set<string>();
    this.validateVisitor();
  }

  /**
   * @packagePath 'com.*.*...' (包路径字符串)
   * @fileName 'ClassA' (类名)
   * @packageNames : [ @packagePath + @fileName ] = ['com.*.ClassA','com.*.ClassB',...] (该包路径下的所有类名)
   */
  getPackageNames(packagePathArray: string[]) {
    return Object.keys(this.path_package).filter((i) => {
      const packagePath = packagePathArray.join(".");
      const fileName = i.replace(`${packagePath}.`, "");
      return i.startsWith(packagePath) && fileName && !fileName.includes(".");
    });
  }

  visit(ctx: CstNode | CstNode[], { inputCode }: { inputCode: string }) {
    this.code = inputCode;
    return super.visit(ctx);
  }

  /**
   * 处理package声明
   * @pathArray ['com','*','*',...] (包路径数组)
   * 记录该包路径下的所有类名，便于后期解析import
   */
  packageDeclaration(ctx: PackageDeclarationCtx) {
    const pathArray = ctx.Identifier.map((i) => i.image) || [];
    this.getPackageNames(pathArray).forEach((i) => {
      this.importsNames?.add(i);
    });
    return super.packageDeclaration(ctx);
  }

  /**
   * 处理import声明
   * @pathArray ['com','*','*',...] (包路径数组)
   * @star '*' (是否引入该目录下的所有类)
   */
  importDeclaration(ctx: ImportDeclarationCtx) {
    const pathArray =
      ctx.packageOrTypeName?.[0].children?.Identifier?.map((i) => i.image) ||
      [];
    const star = ctx?.Star?.[0]?.image;

    // 记录import的类名，便于后期生成代码时使用
    if (pathArray.length) {
      // 如果是引入文件夹，则引入该目录下的所有类
      if (star) {
        this.getPackageNames(pathArray).forEach((i) => {
          this.importsNames?.add(i);
        });
      } else {
        // 否则就是引入具体的类
        const packageName = pathArray.join(".");
        this.importsNames?.add(packageName);
      }
    }
    return super.importDeclaration(ctx);
  }

  getElementValue(location: CstNode["location"]) {
    const { startOffset = 0, endOffset = 0 } = location || {};
    const value = this.code.slice(startOffset, endOffset + 1).trim();
    return value.replaceAll('"', "").replaceAll("'", "").trim();
  }

  /**
   *
   * @param ctx
   * @returns
   */
  classModifier(ctx: ClassModifierCtx) {
    const classModifier: ClassModifier = {
      typeName:
        ctx?.annotation?.[0]?.children?.typeName?.[0]?.children?.Identifier?.[0]
          ?.image,
    };

    const elementValue = ctx?.annotation?.[0]?.children?.elementValue;

    if (elementValue) {
      // 如果是@*("*")这种形式
      classModifier.config = {
        ...classModifier.config,
        value: this.getElementValue(elementValue[0].location),
      };
    }
    this.baseInfo = {
      ...this.baseInfo,
      classModifiers: [...(this.baseInfo?.classModifiers || []), classModifier],
    };
    return super.classModifier(ctx, { classTypeName: classModifier.typeName });
  }

  elementValuePairList(
    ctx: ElementValuePairListCtx,
    param?: { classTypeName?: string }
  ) {
    if (param?.classTypeName) {
      // 处理类注解中的元素值对 @*(key = value, key2 = value2, ...)
      ctx?.elementValuePair?.forEach((i) => {
        const key = i.children?.Identifier?.[0]?.image;
        const value = i.children?.elementValue?.[0]?.location;

        this.baseInfo = {
          ...this.baseInfo,
          classModifiers: (this.baseInfo?.classModifiers || []).map((ii) => {
            if (ii.typeName === param.classTypeName) {
              return {
                ...ii,
                config: {
                  ...(ii.config || {}),
                  [key || "value"]: this.getElementValue(value),
                },
              };
            }
            return ii;
          }),
        };
      });
    }
    return super.elementValuePairList(ctx, param);
  }
  // elementValue(ctx: ElementValueCtx, param?: ElementValueParam) {
  //   if (!param) {
  //     return super.elementValue(ctx, param);
  //   }

  //   const { startOffset, endOffset = 0 } =
  //     ctx?.conditionalExpression?.[0]?.location || {};
  //   const value = this.code
  //     .slice(startOffset, endOffset + 1)
  //     .replaceAll('"', "")
  //     .replaceAll("'", "")
  //     .trim();

  //   if (param?.classTypeName) {
  //     switch (param.classTypeName) {
  //       case "RequestMapping":
  //         this.baseInfo = { ...this.baseInfo, url: value };
  //         break;
  //       case "Api":
  //         // 注释
  //         this.baseInfo = {
  //           ...this.baseInfo,
  //           comment: value,
  //         };
  //         break;
  //       default:
  //         break;
  //     }
  //   } else if (param?.fieldTypeName && param?.fieldIndex !== undefined) {
  //     const apiInfo = {
  //       ...this.apiInfos[param.fieldIndex],
  //     };

  //     const fieldTypeName = this.REQUEST_MAPPING.find((i) =>
  //       param.fieldTypeName?.includes(i)
  //     );

  //     switch (fieldTypeName) {
  //       case "ApiOperation":
  //         // 注释
  //         apiInfo.comment = this.baseInfo?.comment + value;
  //         break;
  //       case "GetMapping":
  //         if (value.includes("{") && value.includes("}")) {
  //           apiInfo.getType = "path";
  //         }
  //       case "PostMapping":
  //       case "PutMapping":
  //       case "DeleteMapping":
  //         if (value.includes("{") && value.includes("}")) {
  //           apiInfo.getType = "path";
  //         }
  //       case "PatchMapping":
  //         apiInfo.method = this.POST_MAPPING[fieldTypeName];
  //         if (!param.valuePair || param.valuePair === "value") {
  //           apiInfo.url = `${this.baseInfo?.url}${
  //             value.startsWith("/") ? "" : "/"
  //           }${value}`;
  //         }

  //         break;
  //       default:
  //         break;
  //     }
  //     this.apiInfos[param.fieldIndex] = apiInfo;
  //   }

  //   return super.elementValue(ctx, param);
  // }

  typeIdentifier(ctx: TypeIdentifierCtx) {
    this.baseInfo = { ...this.baseInfo, className: getImage(ctx) || "" };
    return super.typeIdentifier(ctx);
  }

  methodDeclaration(ctx: MethodDeclarationCtx) {
    return super.methodDeclaration(ctx, {
      fieldIndex: this.apiInfos.length,
    });
  }

  methodModifier(ctx: MethodModifierCtx, param?: { fieldIndex: number }) {
    console.log(ctx, param);

    const fieldTypeName =
      ctx?.annotation?.[0]?.children?.typeName?.[0]?.children?.Identifier?.[0]
        ?.image;

    const defaultType = this.REQUEST_MAPPING.find((i) =>
      fieldTypeName?.includes(i)
    ) as keyof typeof this.POST_MAPPING;

    if (
      param?.fieldIndex !== undefined &&
      defaultType &&
      this.POST_MAPPING[defaultType]
    ) {
      this.apiInfos[param?.fieldIndex] = {
        ...this.apiInfos[param?.fieldIndex],
        url: this.baseInfo?.url || "",
        method: this.POST_MAPPING[defaultType],
      };
    }
    return super.methodModifier(ctx, {
      ...param,
      fieldTypeName,
    });
  }

  // elementValuePair(
  //   ctx: ElementValuePairCtx,
  //   param?: {
  //     fieldIndex?: number;
  //     fieldTypeName?: string;
  //   }
  // ) {
  //   return super.elementValuePair(ctx, {
  //     ...param,
  //     valuePair: ctx.Identifier[0].image,
  //   });
  // }

  // variableParaRegularParameter(
  //   ctx: VariableParaRegularParameterCtx,
  //   param: {
  //     fieldIndex: number;
  //   }
  // ) {
  //   if (param?.fieldIndex !== undefined) {
  //     const variableDeclaratorId =
  //       ctx?.variableDeclaratorId[0].children.Identifier?.[0].image;

  //     const { startOffset, endOffset = 0 } = ctx?.unannType[0].location || {};
  //     const value =
  //       encryptionClassName({
  //         code: this.code,
  //         importsNames: this.importsNames,
  //         startOffset,
  //         endOffset,
  //         packageMappings: this.packageMappings,
  //         callback: ({ className, packageName, path }) => {
  //           if (className) {
  //             if (!className.startsWith("ComIbmeeting")) {
  //               this.canNotParseNames.add(packageName);
  //             } else {
  //               this.needParserNames.set(className, {
  //                 name: packageName,
  //                 path,
  //               });
  //             }
  //           }
  //         },
  //       }) || "void";
  //     this.apiInfos[param.fieldIndex] = {
  //       ...this.apiInfos[param.fieldIndex],
  //       queryParams: {
  //         ...(this.apiInfos[param.fieldIndex]?.queryParams || {}),
  //         [variableDeclaratorId || "param"]: value,
  //       },
  //     };
  //   }

  //   return super.variableParaRegularParameter(ctx, param);
  // }

  // result(ctx: ResultCtx, param?: { fieldIndex: number }) {
  //   if (param?.fieldIndex !== undefined) {
  //     const { startOffset = 0, endOffset = 0 } =
  //       ctx.unannType?.[0].location || {};

  //     const value =
  //       startOffset && endOffset
  //         ? encryptionClassName({
  //             code: this.code,
  //             importsNames: this.importsNames,
  //             startOffset,
  //             endOffset,
  //             packageMappings: this.packageMappings,
  //             callback: ({ className, packageName, path }) => {
  //               if (className) {
  //                 if (!className.startsWith("ComIbmeeting")) {
  //                   this.canNotParseNames.add(packageName);
  //                 } else {
  //                   this.needParserNames.set(className, {
  //                     name: packageName,
  //                     path,
  //                   });
  //                 }
  //               }
  //             },
  //           }) || "void"
  //         : "void";
  //     this.apiInfos[param.fieldIndex] = {
  //       ...this.apiInfos[param.fieldIndex],
  //       queryRequestType: value,
  //     };
  //   }
  //   return super.result(ctx, param);
  // }
}
