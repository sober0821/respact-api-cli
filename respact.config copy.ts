import { ControllerBaseInfo, defineConfig } from "./src/type";
const importTemplate = `
/**
 * 该内容由工具生成，请勿手动修改
 * 如有疑问，请联系@wangyan
 */

import { generateParams, requestUtils } from "@/utils";
import {
  isQueryRef,
  vueQuery,
  type DecorationOptions,
  type DecorationParams,
  type GetTSelect,
} from "@/utils/query";
import { useMutation, type UseMutationOptions } from "@tanstack/vue-query";
`;

export default defineConfig({
  // 输入
  source: {
    // Java 源文件目录
    dir: "../ib-meeting/",
  },

  modules: [
    {
      name: "auth",
      controller: {
        // Java Controller 目录
        dir: "ib-meeting-modules/ib-meeting-merchant/src/main/java/com/ibmeeting/merchant/interfaces/controller/AuthController.java",
      },

      // 输出
      output: {
        dir: "./respact", // 输出目录
        generatedName: "/generated.ts", // TypeScript 输出目录
        apiName: "/api.json", // Api 输出目录
        logName: "/log.json", // 日志输出目录
      },

      // 其他配置
      // Java 包名到 TypeScript 命名空间的映射
      packageMappings: {
        Long: "string",
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
        HttpServletRequest: "any | undefined",
        HttpServletResponse: "any | undefined",
        MultipartFile: "any | undefined",
        Pageable: "any | undefined",
        ResponseEntity: "Partial",
        UserDetails: "any | undefined",
        T: "T",
      },
      importTemplate,
    },
    {
      name: "banner",
      controller: {
        // Java Controller 目录
        dir: "ib-meeting-modules/ib-meeting-platform/src/main/java/com/ibmeeting/platform/interfaces/controller/AdBannerController.java",
      },

      // 输出
      output: {
        dir: "./respact", // 输出目录
        generatedName: "/generated.ts", // TypeScript 输出目录
        apiName: "/api.json", // Api 输出目录
        logName: "/log.json", // 日志输出目录
      },

      // 其他配置
      // Java 包名到 TypeScript 命名空间的映射
      packageMappings: {
        Long: "string",
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
        HttpServletRequest: "any | undefined",
        HttpServletResponse: "any | undefined",
        MultipartFile: "any | undefined",
        Pageable: "any | undefined",
        ResponseEntity: "Partial",
        UserDetails: "any | undefined",
        T: "T",
      },
      importTemplate,
    },
  ],
});
