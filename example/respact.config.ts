import { defineConfig } from "respact-api-cli";
export default defineConfig({
  source: {
    dir: "/respact",
  },
  modules: {
    controller: {
      dir: "/src/main/java/com/example/controller",
    },
    output: {
      dir: "./services", // 输出目录
      generatedName: "/generated.ts", // TypeScript 输出目录
    },
    packageMappings: {
      Long: "number",
      String: "string",
      Int: "number",
      Integer: "number",
      Boolean: "boolean",
      Float: "number",
      Double: "number",
      List: "Array",
      Map: "Record",
      Object: "Record<string, any>",
      Void: "void",
      Set: "Array",
      T: "T",
    },
    importTemplate: "",
  },
});
