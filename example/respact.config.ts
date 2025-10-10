import { defineConfig } from "../dist/type";

const packageMappings = {
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
  T: "T",
};

export default defineConfig({
  git: {
    repo: "https://gitee.com/jiangxi-banhui-tech/ib-meeting.git",
    branch: "v1.4.0",
  },
  source: {
    dir: "/respact",
  },
  modules: [
    {
      name: "platform",
      controller: {
        dir: [
          "/ib-meeting-modules/ib-meeting-platform/src/main/java/com/ibmeeting/platform/interfaces/controller",
        ],
      },
      output: {
        dir: "./services", // 输出目录
        generatedName: "/generated.ts", // TypeScript 输出目录
        apiName: "/api.json", // Api 输出目录
        logName: "/log.json", // 日志输出目录
      },
      packageMappings,
    },
  ],
});
