#!/usr/bin/env node

import { program } from "commander";
import fs from "fs";
import path from "path";
import { createJiti } from "jiti";
import { RespactConfig, TaskConfig } from "./type";
import { TaskProcessor } from "./task/task-processor";
import templateContent from "./templates/respact.config.ts?raw";
import chalk from "chalk";
import { validateRespactConfig } from "./task/validate";

// 初始化 jiti，它可以在运行时加载 TS 文件
const jiti = createJiti(__filename);

program
  .name("respact-api-cli")
  .description("respact Java 到 TypeScript 转换工具")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize respact config file")
  .action(() => {
    const configFilePath = path.join(process.cwd(), "respact.config.ts");

    if (fs.existsSync(configFilePath)) {
      console.log(chalk.yellow("respact.config.ts 文件已存在，跳过创建。"));
      return;
    }

    try {
      // templateContent 已经是一个字符串了，直接写入即可
      fs.writeFileSync(configFilePath, templateContent);
      console.log(chalk.green("✅ 成功创建 respact.config.ts 文件！"));
    } catch (error) {
      console.error(chalk.red("创建配置文件时出错："), error);
    }
  });

program
  .command("convert")
  .description("Convert Java DTOs to TypeScript interfaces")
  .action(async () => {
    const configPath = path.join(process.cwd(), "respact.config.ts");

    const config = (
      (await jiti.import(configPath)) as { default: RespactConfig }
    ).default;

    try {
      await validateRespactConfig(config);
    } catch (error) {
      console.error("配置验证失败:\n", error);
      process.exit(1);
    }

    try {
      let taskConfigs: TaskConfig[] = [];
      if (config.modules instanceof Array) {
        taskConfigs = config.modules.map((m) => {
          return {
            ...config,
            ...m,
          };
        });
      } else {
        taskConfigs = [
          {
            ...config,
            ...config.modules,
          },
        ];
      }
      const uniqueNames = new Set<string>();
      for (const cfg of taskConfigs) {
        if (cfg.name) {
          if (uniqueNames.has(cfg.name)) {
            console.error(
              chalk.red(`模块名称 ${cfg.name} 重复，请确保每个模块名称唯一。`)
            );
            process.exit(1);
          }
          uniqueNames.add(cfg.name);
        }
      }
      for (const cfg of taskConfigs) {
        const task = new TaskProcessor(cfg);
        await task.convert();
      }
    } catch (error) {
      console.error("Failed to load or parse respact.config.ts:\n", error);
      process.exit(1);
    }
  });

program.parse(process.argv);
