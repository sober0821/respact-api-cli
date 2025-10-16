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
import {
  encryptionClassName,
  encryptionClassNameTest,
  getImage,
  importToNames,
} from ".";
import { Modifier, ControllerBaseInfo } from "@/type";

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

  // 用于记录当前文件的 import 类名，便于后期解析类型
  // 包括类名、路径、同文件夹下的类
  private importsNames?: Set<string>;

  // 用于记录需要解析的类
  needParserNames: Set<string>;

  // 用于记录无法解析的类（比如来自jar包的import）
  canNotParseNames: Set<string>;

  // 当前解析的代码
  private code: string = "";

  // 当前类的基础信息
  baseInfo?: ControllerBaseInfo;

  baseInfoList: ControllerBaseInfo[] = [];

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
    this.needParserNames = new Set<string>();
    this.canNotParseNames = new Set();
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

    this.baseInfo = {};
    return super.visit(ctx);
  }
  parser(ctx: CstNode | CstNode[], { inputCode }: { inputCode: string }) {
    this.visit(ctx, { inputCode });
    if (this.baseInfo) {
      this.baseInfoList.push(this.baseInfo);
    }
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
        if (this.path_package[packageName]) {
          this.importsNames?.add(packageName);
        }
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
    const classModifier: Modifier = {
      typeName:
        ctx?.annotation?.[0]?.children?.typeName?.[0]?.children?.Identifier?.[0]
          ?.image,
    };

    if (!classModifier.typeName) {
      return super.classModifier(ctx, {
        classTypeName: classModifier.typeName,
      });
    }

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
    param?: {
      classTypeName?: string;
      fieldTypeName?: string;
      fieldIndex?: number;
    }
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

    if (
      param?.fieldTypeName &&
      (param?.fieldIndex || param?.fieldIndex === 0)
    ) {
      ctx?.elementValuePair?.forEach((i) => {
        const key = i.children?.Identifier?.[0]?.image;
        const value = i.children?.elementValue?.[0]?.location;

        const fields = this.baseInfo?.fields || [];

        fields[param.fieldIndex!] = {
          ...fields[param.fieldIndex!],
          fieldModifiers: (fields[param.fieldIndex!]?.fieldModifiers || []).map(
            (ii) => {
              if (ii.typeName === param.fieldTypeName) {
                return {
                  ...ii,
                  config: {
                    ...(ii.config || {}),
                    [key || "value"]: this.getElementValue(value),
                  },
                };
              }
              return ii;
            }
          ),
        };

        this.baseInfo = {
          ...this.baseInfo,
          fields,
        };
      });
    }
    return super.elementValuePairList(ctx, param);
  }

  typeIdentifier(ctx: TypeIdentifierCtx) {
    this.baseInfo = { ...this.baseInfo, className: getImage(ctx) || "" };
    return super.typeIdentifier(ctx);
  }

  methodDeclaration(ctx: MethodDeclarationCtx) {
    if (!this.baseInfo?.fields) {
      this.baseInfo = { ...this.baseInfo, fields: [] };
    }
    return super.methodDeclaration(ctx, {
      fieldIndex: this.baseInfo?.fields?.length || 0,
    });
  }

  methodModifier(ctx: MethodModifierCtx, param?: { fieldIndex: number }) {
    if (!param?.fieldIndex && param?.fieldIndex !== 0) {
      return super.methodModifier(ctx, param);
    }

    const fieldTypeName =
      ctx?.annotation?.[0]?.children?.typeName?.[0]?.children?.Identifier?.[0]
        ?.image;

    const fieldModifier: Modifier = {
      typeName: fieldTypeName,
    };

    if (!fieldModifier.typeName) {
      return super.methodModifier(ctx, param);
    }

    const elementValue = ctx?.annotation?.[0]?.children?.elementValue;

    if (elementValue) {
      // 如果是@*("*")这种形式
      fieldModifier.config = {
        ...fieldModifier.config,
        value: this.getElementValue(elementValue[0].location),
      };
    }
    if (!this.baseInfo?.fields) {
      return super.methodModifier(ctx, param);
    }
    this.baseInfo.fields[param.fieldIndex] = {
      fieldModifiers: [
        ...(this.baseInfo?.fields?.[param.fieldIndex]?.fieldModifiers || []),
        fieldModifier,
      ],
    };

    return super.methodModifier(ctx, {
      ...param,
      fieldTypeName,
    });
  }

  variableParaRegularParameter(
    ctx: VariableParaRegularParameterCtx,
    param: {
      fieldIndex: number;
    }
  ) {
    if (param?.fieldIndex !== undefined) {
      const variableDeclaratorId =
        ctx?.variableDeclaratorId[0].children.Identifier?.[0].image;

      const { startOffset, endOffset = 0 } = ctx?.unannType[0].location || {};
      const value =
        encryptionClassNameTest({
          code: this.code,
          importsNames: this.importsNames,
          startOffset,
          endOffset,
          packageMappings: this.packageMappings,
          callback: ({ className, packageName }) => {
            if (packageName) {
              this.needParserNames.add(packageName);
            } else {
              this.canNotParseNames.add(className);
            }
          },
        }) || "void";

      const modifiers =
        ctx?.variableModifier?.map((i) => {
          let elementValue =
            i?.children?.annotation?.[0]?.children?.elementValue?.[0];

          if (!elementValue) {
            elementValue =
              i?.children?.annotation?.[0]?.children?.elementValuePairList?.find(
                (ii) => {
                  return (
                    ii?.children?.elementValuePair?.[0]?.children
                      ?.Identifier?.[0]?.image === "value"
                  );
                }
              )?.children?.elementValuePair?.[0]?.children?.elementValue?.[0];
          }

          return {
            typeName:
              i?.children?.annotation?.[0]?.children?.typeName?.[0]?.children
                ?.Identifier?.[0]?.image || "",
            config: {
              ...(elementValue && {
                value: this.getElementValue(elementValue.location),
              }),
            },
          };
        }) || [];

      if (this.baseInfo?.fields) {
        this.baseInfo.fields[param.fieldIndex] = {
          ...this.baseInfo.fields[param.fieldIndex],
          params: [
            ...(this.baseInfo.fields[param.fieldIndex]?.params || []),
            {
              modifiers,
              type: value,
              name: variableDeclaratorId,
            },
          ],
        };
      }
    }

    return super.variableParaRegularParameter(ctx, param);
  }

  result(ctx: ResultCtx, param?: { fieldIndex: number }) {
    if (param?.fieldIndex !== undefined) {
      const { startOffset = 0, endOffset = 0 } =
        ctx.unannType?.[0].location || {};

      const value =
        startOffset && endOffset
          ? encryptionClassNameTest({
              code: this.code,
              importsNames: this.importsNames,
              startOffset,
              endOffset,
              packageMappings: this.packageMappings,
              callback: ({ className, packageName }) => {
                if (packageName) {
                  this.needParserNames.add(packageName);
                } else {
                  this.canNotParseNames.add(className);
                }
              },
            }) || "void"
          : "void";
      if (this.baseInfo?.fields) {
        this.baseInfo.fields[param.fieldIndex] = {
          ...this.baseInfo.fields[param.fieldIndex],
          result: value,
        };
      }
    }
    return super.result(ctx, param);
  }
}
