import {
  BaseJavaCstVisitorWithDefaults,
  CstNode,
  PackageDeclarationCtx,
} from "java-parser";

export class ParserPackage extends BaseJavaCstVisitorWithDefaults {
  path_package: Record<string, string>;
  constructor() {
    super();
    this.validateVisitor();
    this.path_package = {};
  }

  visit(ctx: CstNode, path: string) {
    return super.visit(ctx, path);
  }
  packageDeclaration(ctx: PackageDeclarationCtx, path: string) {
    const packagePathArray = ctx.Identifier.map((i) => i.image) || [];
    const packageName =
      packagePathArray.join(".") + "." + path.split("/").pop()!.split(".")[0];
    this.path_package[packageName] = path;
    return super.packageDeclaration(ctx, path);
  }
}
