export interface RespactConfig {
  source: { dir: string };
  controller: { dir: string };
  importTemplate: string;
  apiTemplate: string;
  formatApiInfo: (api: ApiInfo) => Record<string, string>;
  apiInfoTemplateKey: (key: string) => string;
  output: {
    dir: string;
    typeName: string;
    apiName?: string;
    logName?: string;
  };
  packageMappings: { [key: string]: string };
}

export type EnumBaseType = string | number | boolean;
export interface AbstractBody {
  config?: Record<string, any>;
  required?: boolean;
  key?: string;
  path?: string;
  value?: EnumBaseType;
  comments?: EnumBaseType[] | null;
  children?: AbstractBody[];
}

export type AbstractStructuresType = "enum" | "class" | "array";

// 抽象结构体类型
export interface AbstractStructures {
  // 注释（可选）
  comments?: string[] | null;
  // 名称
  name: string;
  // 类型
  type: AbstractStructuresType;
  // 继承的接口或类名
  extendsName?: string;
  // 主体内容
  abstractBody: AbstractBody[];
}

export interface ApiInfo {
  url: string;
  method: string;
  queryParams?: Record<string, string>;
  queryRequestType: string;
  comment?: string;
  getType?: "query" | "body" | "path";
}

export interface ImportName {
  name: string;
  path: string;
}
