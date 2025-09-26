import { ControllerBaseInfo, defineConfig } from "respact-api-cli";

const importTemplate = `
/**
 * 该内容由工具生成，请勿手动修改
 */

// import ... from "...";
`;

// function formatApiInfo(infos: ControllerBaseInfo[]): string {

//   // make some string if needed
//   return "";
// }

export default defineConfig({
  // git: {
  //   repo: "",
  //   branch: "master",
  // },
  // 输入
  source: {
    // Java 源文件目录
    dir: "/respact",
  },

  modules: {
    controller: {
      // Java Controller 目录 string | string[]
      // 支持.java、/**/、/**/*
      dir: [],
    },

    // 输出
    output: {
      dir: "./src/services", // 输出目录
      generatedName: "/generated.ts", // TypeScript 输出目录
      apiName: "/api.json", // Api 输出目录
      logName: "/log.json", // 日志输出目录
    },

    // 其他配置
    // Java 包名到 TypeScript 命名空间的映射
    packageMappings: {
      Long: "number",
      String: "string",
      int: "number",
      Int: "number",
      Integer: "number",
      Boolean: "boolean",
      Float: "number",
      Double: "number",
      List: "Array",
      BigDecimal: "number",
      LocalDateTime: "string",
      Map: "Record",
      Object: "Record<string, any>",
      Void: "void",
      Set: "Array",
      Timestamp: "string",
      LocalTime: "string",
      LocalDate: "string",
      Date: "string",
      JavaUtilDate: "string",
      HttpServletRequest: "undefined | any",
      HttpServletResponse: "undefined | any",
      MultipartFile: "undefined | any",
      Pageable: "undefined | any",
      ResponseEntity: "Partial",
      UserDetails: "undefined | any",
    },
    importTemplate,
    // formatApiInfo,
  },
});
