#!/usr/bin/env node

import { program } from "commander";
import fs from "fs";
import path from "path";
import { createJiti } from "jiti";
import { RespactConfig } from "./type";
import { TaskProcessor } from "./task/task-processor";
import templateContent from "./templates/respact.config.text?raw";
import chalk from "chalk";

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

    if (!config.source || !config.output.dir) {
      console.error(
        chalk.red(
          "respact.config.js not found. Please run 'init' command first."
        )
      );
      process.exit(1); // 退出进程，而不是返回
    }

    const task = new TaskProcessor(config);
    task.convert();
    try {
    } catch (error) {
      console.error("Failed to load or parse respact.config.ts:", error);
      process.exit(1);
    }
  });

program.parse(process.argv);
