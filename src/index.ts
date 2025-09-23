#!/usr/bin/env node

import { program } from "commander";
import fs from "fs";
import path from "path";
import { createJiti } from "jiti";
import { RespactConfig } from "./type";
import { TaskProcessor } from "./task/task-processor";
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
    const configContent = fs.readFileSync(
      path.resolve(__dirname, "../respact.config.ts"),
      "utf-8"
    );

    // 将文件名改为 respact.config.ts
    fs.writeFileSync(
      path.join(process.cwd(), "respact.config.ts"),
      configContent
    );

    console.log("respact.config.ts file created.");
  });

program
  .command("convert")
  .description("Convert Java DTOs to TypeScript interfaces")
  .action(async () => {
    const configPath = path.join(process.cwd(), "respact.config.ts");

    try {
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
    } catch (error) {
      console.error("Failed to load or parse respact.config.ts:", error);
      process.exit(1);
    }
  });

program.parse(process.argv);
