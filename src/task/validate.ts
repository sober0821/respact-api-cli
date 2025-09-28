import { z } from "zod";

// 基础模块配置 Schema
const BaseModuleConfigSchema = z.object({
  controller: z.object({
    dir: z.union([z.string(), z.array(z.string())]),
  }),
  importTemplate: z.string().optional(),
  formatApiInfo: z
    .function({
      input: z.array(z.any()),
      output: z.string(),
    })
    .optional(),
  output: z.object({
    dir: z.string(),
    generatedName: z.string(),
    apiName: z.string().optional(),
    logName: z.string().optional(),
  }),
  packageMappings: z.record(z.string(), z.string()),
});

// 带名称的模块配置 Schema
const NamedModuleConfigSchema = BaseModuleConfigSchema.extend({
  name: z.string(),
});

// 主配置 Schema
const RespactConfigSchema = z.object({
  git: z
    .object({
      repo: z.string(),
      branch: z.string().optional(),
    })
    .optional(),
  source: z.object({
    dir: z.string(),
  }),
  // modules 可以是基础模块配置，也可以是带名称的模块配置
  modules: z.union([
    BaseModuleConfigSchema,
    z.array(z.union([NamedModuleConfigSchema])),
  ]),
});

// 验证函数
export async function validateRespactConfig(config: unknown) {
  try {
    await RespactConfigSchema.parseAsync(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join("\n");
      throw new Error(`配置验证失败:\n${errorMessages}`);
    }
    throw error;
  }
}
