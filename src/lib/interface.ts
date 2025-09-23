import { AbstractStructures, ImportName } from "@/type";

import {
  BaseJavaCstVisitorWithDefaults,
  type FieldDeclarationCtx,
  type CstNode,
  type IToken,
  type TypeDeclarationCtx,
  type EnumDeclarationCtx,
  type NormalClassDeclarationCtx,
  type VariableDeclaratorIdCtx,
  type UnannClassOrInterfaceTypeCtx,
  type ElementValuePairCtx,
  type ClassExtendsCtx,
  type ImportDeclarationCtx,
  type PackageDeclarationCtx,
  UnannPrimitiveTypeWithOptionalDimsSuffixCtx,
} from "java-parser";
import { encryptionClassName, getImage, getLine, importToNames } from ".";

interface ParamType {
  index: number;
  fieldIndex?: number;
}

export class ParserInterface extends BaseJavaCstVisitorWithDefaults {
  importsNames?: Map<string, ImportName>;

  // 用于记录已经解析过的类，避免重复解析
  parseredNames: Set<string>;

  // 用于记录需要继续解析的类
  needParserNames: Map<string, ImportName>;

  // 用于存储最终的数据结构
  structures: Partial<AbstractStructures>[];

  // 用于记录注释的行号，便于后期对应各个field
  private sequence: string[];

  private code: string;

  private pathName: string;

  private path_package: Record<string, string>;

  private packageMappings: { [key: string]: string };

  constructor({
    path_package,
    packageMappings,
  }: {
    path_package: Record<string, string>;
    packageMappings: { [key: string]: string };
  }) {
    super();
    this.validateVisitor();
    this.sequence = [];
    this.code = "";
    this.pathName = "";
    this.structures = [];
    this.path_package = path_package;
    this.parseredNames = new Set<string>();
    this.needParserNames = new Map<string, ImportName>();
    this.packageMappings = packageMappings;
  }

  setStructuresField(
    index: number,
    fieldIndex: number,
    obj: AbstractStructures["abstractBody"][number]
  ) {
    this.structures[index] = {
      ...this.structures[index],
      abstractBody: this.structures[index].abstractBody?.map((item, idx) => {
        if (idx === fieldIndex)
          return {
            ...item,
            ...obj,
            config: {
              ...item.config,
              ...obj.config,
            },
          };
        return item;
      }),
    };
  }

  visit(
    cstNode: CstNode & {
      comments?: IToken[];
    },
    { inputCode }: { inputCode: string }
  ) {
    this.importsNames = new Map<string, ImportName>();
    this.code = inputCode;
    this.sequence?.push(...Array(cstNode.location.endLine || 0).fill(""));
    for (const comment of cstNode.comments || []) {
      this.sequence[comment.startLine] = comment.image;
    }
    return super.visit(cstNode);
  }

  packageDeclaration(ctx: PackageDeclarationCtx) {
    const packagePathArray = ctx.Identifier.map((i) => i.image) || [];
    this.pathName = importToNames(packagePathArray.join("."));

    // 记录package所在的目录其他类名
    const packageNames = Object.keys(this.path_package).filter((i) => {
      const filePath = packagePathArray.join(".");
      const fileName = i.replace(`${filePath}.`, "");
      return i.startsWith(filePath) && fileName && !fileName.includes(".");
    });
    packageNames.forEach((i) => {
      this.importsNames?.set(i.split(".").pop()!, {
        name: importToNames(i),
        path: i,
      });
    });

    return super.packageDeclaration(ctx);
  }

  importDeclaration(ctx: ImportDeclarationCtx) {
    const importPathArray =
      ctx.packageOrTypeName?.[0].children?.Identifier?.map((i) => i.image) ||
      [];
    const star = ctx?.Star?.[0]?.image;

    // 记录import的类名，便于后期生成代码时使用
    if (importPathArray.length) {
      // 如果是引入文件夹，则引入该目录下的所有类
      if (star) {
        const packageNames = Object.keys(this.path_package).filter((i) => {
          const filePath = importPathArray.join(".");
          const fileName = i.replace(`${filePath}.`, "");
          return i.startsWith(filePath) && fileName && !fileName.includes(".");
        });
        packageNames.forEach((i) => {
          this.importsNames?.set(i.split(".").pop()!, {
            name: importToNames(i),
            path: i,
          });
        });
        // 否则就是引入具体的类
      } else {
        const className = importPathArray.pop()!;
        const packageName = importPathArray.join(".");
        this.importsNames?.set(className, {
          name: importToNames(
            packageName ? `${packageName}.${className}` : className
          ),
          path: packageName + (packageName ? `.${className}` : className),
        });
      }
    }

    return super.importDeclaration(ctx);
  }

  typeDeclaration(ctx: TypeDeclarationCtx) {
    this.structures.push({});
    return super.typeDeclaration(ctx, {
      index: this.structures.length - 1,
    });
  }

  // type
  normalClassDeclaration(ctx: NormalClassDeclarationCtx, param?: ParamType) {
    if (param) {
      this.structures[param.index].type = "class";

      // name
      const typeIdentifier = getImage(ctx.typeIdentifier?.[0]?.children);
      const typeParameters = ctx.typeParameters;

      const value = typeParameters ? "<T = Object>" : "";

      // this.structures[param.index].name =
      //   this.pathName + typeIdentifier + value;
      this.structures[param.index].name = typeIdentifier + value;

      this.parseredNames.add(this.pathName + typeIdentifier + value || "");

      const startLine = getLine(ctx.typeIdentifier[0]?.children);

      // 处理comments
      for (let idx = 0; idx < (startLine || 0); idx++) {
        if (!this.sequence[idx]) {
          continue;
        }
        this.structures[param.index].comments = [
          ...(this.structures[param.index].comments || []),
          this.sequence[idx],
        ];
        // Clear the comment after processing to avoid duplication
        this.sequence[idx] = "";
      }
    }
    return super.normalClassDeclaration(ctx, param);
  }
  enumDeclaration(ctx: EnumDeclarationCtx, param?: ParamType) {
    if (param) this.structures[param.index].type = "enum";
    return super.enumDeclaration(ctx, param);
  }

  // extends
  classExtends(ctx: ClassExtendsCtx, param?: ParamType) {
    if (param) {
      const { startOffset = 0, endOffset = 0 } =
        ctx.classType?.[0]?.location || {};

      const extendsName = encryptionClassName({
        code: this.code,
        importsNames: this.importsNames,
        startOffset,
        endOffset,
        packageMappings: this.packageMappings,
        callback: ({ className, packageName, path }) => {
          // 过滤掉已经解析过的类
          if (className && !this.parseredNames.has(className)) {
            this.needParserNames.set(className, { name: className, path });
          }
        },
      });
      this.structures[param.index].extendsName = extendsName;
    }
    return super.classExtends(ctx, param);
  }

  fieldDeclaration(ctx: FieldDeclarationCtx, param: ParamType) {
    this.structures[param.index].abstractBody = [
      ...(this.structures[param.index].abstractBody || []),
      {},
    ];

    return super.fieldDeclaration(ctx, {
      ...param,
      fieldIndex:
        (this.structures[param?.index || 0].abstractBody?.length || 1) - 1,
    });
  }

  elementValuePair(ctx: ElementValuePairCtx, param?: ParamType) {
    if (param && param.fieldIndex !== undefined) {
      const key = getImage(ctx) || "";
      const { startOffset, endOffset } = ctx?.elementValue?.[0]?.location || {};
      const value = this.code
        .slice(startOffset, endOffset + 1)
        .replaceAll('"', "")
        .replaceAll("'", "")
        .trim();
      this.setStructuresField(param.index, param.fieldIndex, {
        config: {
          [key]: value,
        },
      });
    }
    return super.elementValuePair(ctx, param);
  }

  // value
  unannClassOrInterfaceType(
    ctx: UnannClassOrInterfaceTypeCtx,
    param?: ParamType
  ) {
    if (param && param.fieldIndex !== undefined) {
      const { startOffset, endOffset } = ctx?.unannClassType[0]?.location;

      const value = encryptionClassName({
        code: this.code,
        importsNames: this.importsNames,
        startOffset,
        endOffset,
        packageMappings: this.packageMappings,
        callback: ({ className, packageName, path }) => {
          // 过滤掉已经解析过的类
          if (className && !this.parseredNames.has(className)) {
            this.needParserNames.set(className, { name: className, path });
          }
        },
      });

      this.setStructuresField(param.index, param.fieldIndex, { value });
    }
    return super.unannClassOrInterfaceType(ctx, param);
  }

  unannPrimitiveTypeWithOptionalDimsSuffix(
    ctx: UnannPrimitiveTypeWithOptionalDimsSuffixCtx,
    param?: ParamType
  ) {
    if (param && param.fieldIndex !== undefined) {
      const { startOffset, endOffset } =
        ctx?.unannPrimitiveType?.[0]?.location || {};

      const value = encryptionClassName({
        code: this.code,
        importsNames: this.importsNames,
        startOffset,
        endOffset,
        packageMappings: this.packageMappings,
        callback: ({ className, packageName, path }) => {
          // 过滤掉已经解析过的类
          if (className && !this.parseredNames.has(className)) {
            this.needParserNames.set(className, { name: className, path });
          }
        },
      });

      this.setStructuresField(param.index, param.fieldIndex, { value });
    }

    return super.unannPrimitiveTypeWithOptionalDimsSuffix(ctx, param);
  }

  // key
  variableDeclaratorId(ctx: VariableDeclaratorIdCtx, param: ParamType) {
    if (param) {
      const obj = {
        key: getImage(ctx),
        comments: [] as string[],
      };

      const startLine = getLine(ctx);
      // 处理comments
      for (let idx = 0; idx < (startLine || 0); idx++) {
        if (!this.sequence[idx]) {
          continue;
        }
        obj.comments = [...(obj.comments || []), this.sequence[idx]];
        // Clear the comment after processing to avoid duplication
        this.sequence[idx] = "";
      }
      if (param.fieldIndex !== undefined) {
        this.setStructuresField(param.index, param.fieldIndex, obj);
      }
    }
    return super.variableDeclaratorId(ctx, param);
  }
}
