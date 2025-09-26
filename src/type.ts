interface ModuleConfig {
  controller: { dir: string | string[] };
  importTemplate: string;
  formatApiInfo?: (api: ControllerBaseInfo[]) => string;
  output: {
    dir: string;
    generatedName: string;
    apiName?: string;
    logName?: string;
  };
  packageMappings: { [key: string]: string };
}

export interface RespactConfig {
  git?: { repo: string; branch?: string };
  source: { dir: string };

  modules: ModuleConfig | (ModuleConfig & { name: string })[];
}

export interface TaskConfig
  extends Pick<RespactConfig, "git" | "source">,
    ModuleConfig {
  name?: string;
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
export interface Modifier {
  typeName?: string;
  config?: Record<string, string>;
}

export interface ParamModifier {
  modifiers?: string[];
  type?: string;
  name?: string;
}

export interface Field {
  fieldModifiers?: Modifier[];
  params?: ParamModifier[];
  result?: string;
}
export interface ControllerBaseInfo {
  className?: string;
  classModifiers?: Modifier[];
  fields?: Field[];
}

/**
 * 用于 respact.config.ts 的辅助函数，以获取类型提示
 * @param config 你的配置对象
 */
export function defineConfig(config: RespactConfig): RespactConfig {
  return config;
}

export * from "./type";
