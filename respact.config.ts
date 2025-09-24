import { defineConfig } from "./src/type";
import type { ApiInfo } from "./src/type";
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

const apiTemplate = `
/**
 * __comment__
 * query
 */
export function query__key__(
  params: __queryParamsType__,
  config?: Record<string, any>
): Promise<__queryRequestType__> {
  return requestUtils.__method__(\`__url__\`, generateParams(params, "__method__", "__getType__"), config);
}

/**
 * __comment__
 * useQuery
 */
export function use__key__Query(
  params: DecorationParams<__queryParamsType__>,
  options?: DecorationOptions<__queryRequestType__, GetTSelect<__queryRequestType__>>,
  config?: Record<string, any>
) {
  return vueQuery<
    __queryParamsType__,
    GetTSelect<__queryRequestType__>
  >(
    ["__key__"],
    () => query__key__(isQueryRef(params) ? params.value : params, config),
    params,
    options
  );
}

/**
 * __comment__
 * useMutation
 */
export function use__key__Mutation(
  options?: Partial<UseMutationOptions<
    __queryRequestType__,
    Error,
    __queryParamsType__,
    unknown
  >>,
  config?: Record<string, any>
) {
  return useMutation<
    __queryRequestType__,
    Error,
    __queryParamsType__
  >({
    ...options,
    mutationFn: (params: __queryParamsType__) => query__key__(params, config),
  });
}
`;

const formatApiInfo = (api: ApiInfo) => {
  let { url, queryParams, getType = "query", ...res } = api;
  const key =
    url
      .replaceAll("-", "/")
      .replaceAll("{", "/")
      .replaceAll("}", "/")
      .split("/")
      .filter((i) => !!i || i !== "api")
      .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
      .join("") || "Root";

  if (getType && getType === "path") {
    Object.keys(queryParams || {}).forEach((k) => {
      url = url.replace(`{${k}}`, `\${params.${k}}`);
    });
  }

  const getQueryParams = (qeury: Record<string, string>) => {
    return `{${Object.entries(qeury || {})
      .map(([k, v]) => `"${k}": ${v}`)
      .join("; ")}}`;
  };

  return {
    key,
    url,
    getType,
    queryParamsType:
      api.method === "get"
        ? getQueryParams(queryParams || {})
        : Object.values(queryParams || {})[0] || "void",
    ...res,
  };
};

export default defineConfig({
  // 输入
  source: {
    // Java 源文件目录
    dir: "../ib-meeting/",
  },

  controller: {
    // Java Controller 目录
    dir: "ib-meeting-modules/ib-meeting-merchant/src/main/java/com/ibmeeting/merchant/interfaces/controller",
  },

  // 输出
  output: {
    dir: "./respact", // 输出目录
    typeName: "/generated.ts", // TypeScript 输出目录
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
  },
  importTemplate,

  apiTemplate,
  formatApiInfo,
  apiInfoTemplateKey: (key) => `__${key}__`,
});
