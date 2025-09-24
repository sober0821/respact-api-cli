import path from "path";
import fs from "fs";
import _ from "lodash";
import chalk from "chalk";
import { AbstractStructures, ApiInfo, ImportName, RespactConfig } from "@/type";
import { getAllJavaFiles } from "@/lib";
import { ParserPackage } from "@/lib/package";
import { parse } from "java-parser";
import { ParserInterface } from "@/lib/interface";
import { ParserController } from "@/lib/controller";
import cliProgress from "cli-progress";
import prettier from "prettier";
import { promisify } from "util";
import { exec } from "child_process";
import ora from "ora";

const execPromise = promisify(exec);

export class TaskProcessor {
  private config: RespactConfig;

  constructor(config: RespactConfig) {
    if (!config.source) {
      throw new Error("source is required");
    }

    if (!config.controller || !config.controller.dir) {
      throw new Error("controller is required");
    }

    if (!config.output) {
      throw new Error("output is required");
    }

    if (config.git && !config.git.repo) {
      throw new Error("git.repo is required");
    }

    this.config = config;
  }

  /**
   * 从指定的 URL 克隆一个 Git 仓库到本地路径
   * @param repoUrl 仓库的 URL，例如 "https://github.com/user/repo.git"
   * @param destinationPath 要克隆到的本地目标路径
   */
  async cloneRepository(
    repoUrl: string,
    destinationPath: string,
    branch?: string
  ) {
    const cloneMessage = branch
      ? `正在从 ${repoUrl} 的 ${branch} 分支克隆仓库...`
      : `正在从 ${repoUrl} 克隆仓库...`;
    console.log(chalk.blue(cloneMessage));

    // 构造 git clone 命令
    // --depth 1 表示只克隆最新的提交，可以大大加快克隆速度，对于只需要最新代码的场景非常有用
    const branchOption = branch ? `-b ${branch}` : "";
    const command = `git clone ${branchOption} ${repoUrl} "${destinationPath}"`;

    try {
      const { stdout, stderr } = await execPromise(command);
      if (stderr && !stderr.includes("Cloning into")) {
        // Git 在克隆时会将进度信息输出到 stderr，所以我们需要过滤掉正常的进度信息
        console.warn(chalk.yellow(`克隆过程中出现警告或信息: ${stderr}`));
      }
      console.log(chalk.green(`✅ 仓库成功克隆到: ${destinationPath}`));
    } catch (error: any) {
      console.error(chalk.red(`克隆仓库失败: ${error.message}`));
      throw error;
    }
  }

  /**
   * 转换 Java 到 TypeScript
   */
  async convert() {
    const rootPath = path.resolve(
      path.join(process.cwd(), this.config?.source.dir)
    );
    const outputFolder = path.resolve(this.config?.output.dir);
    console.log(`源文件目录: ${rootPath}`);

    if (this.config.git) {
      if (fs.existsSync(rootPath)) {
        console.log(chalk.blue("删除已存在的java文件..."));
        fs.rmSync(rootPath, { recursive: true });
      }
      if (!fs.existsSync(rootPath)) {
        // 创建输出文件夹
        fs.mkdirSync(rootPath, { recursive: true });
      }
      try {
        await this.cloneRepository(
          this.config.git.repo,
          rootPath,
          this.config.git.branch
        );
      } catch (e) {
        console.log(chalk.red("克隆仓库失败，请检查 git 配置"));
        process.exit(1);
      }
    }

    const generated_outputDir = path.resolve(
      path.join(outputFolder, this.config.output.typeName)
    );

    console.log(chalk.blue("Starting conversion..."));

    // 删除已存在的输出文件
    if (fs.existsSync(generated_outputDir)) {
      console.log(chalk.blue("删除已存在的输出文件..."));
      fs.rmSync(generated_outputDir, { recursive: true });
    }

    if (!fs.existsSync(outputFolder)) {
      // 创建输出文件夹
      fs.mkdirSync(outputFolder, { recursive: true });
    }

    // 1、获取目录下的所有 Java 文件
    console.log(chalk.blue("获取目录下的所有 Java 文件..."));
    const allJavaFiles = getAllJavaFiles(rootPath);
    console.log(
      chalk.blue("获取成功，共计 " + allJavaFiles.length + " 个文件")
    );

    const progressBar = new cliProgress.SingleBar({
      // 使用 chalk 定义进度条的格式和颜色
      format:
        "解析文件 " +
        chalk.cyan("{bar}") +
        " {percentage}% || {value}/{total} 文件",
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
      hideCursor: true,
    });

    progressBar.start(allJavaFiles.length, 0);
    // 2、读取并解析每个 Java 文件，收集 package 用来映射文件路径
    const packageCollector = new ParserPackage();
    for (const file of allJavaFiles) {
      try {
        const fileContent = fs.readFileSync(file, "utf8");
        packageCollector.visit(parse(fileContent), file);
        progressBar.increment();
      } catch (error) {
        progressBar.stop();
        console.log(chalk.red("解析文件出错：" + file));
        console.log(chalk.red("该文件存在语法错误，无法解析"));
        process.exit(1);
      }
    }
    progressBar.stop();

    const path_package = packageCollector.path_package;

    console.log(chalk.blue("获取Controller目录下的所有文件..."));
    const controllerFileFolder = path.resolve(
      path.join(rootPath, this.config.controller.dir)
    );

    const controllerJavaFiles = getAllJavaFiles(controllerFileFolder);
    console.log(
      chalk.blue("获取成功，共计 " + controllerJavaFiles.length + " 个文件")
    );

    // 遍历输入文件并转换
    console.log(chalk.blue("遍历Controller文件并转换..."));
    const controller_progressBar = new cliProgress.SingleBar({
      // 使用 chalk 定义进度条的格式和颜色
      format:
        "解析文件 " +
        chalk.cyan("{bar}") +
        " {percentage}% || {value}/{total} 文件",
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
      hideCursor: true,
    });
    controller_progressBar.start(controllerJavaFiles.length, 0);

    const apiInfos: ApiInfo[] = [];
    const needParserPaths = new Set<string>();
    const canNotParserNames = new Set<string>();

    // 检查同名类
    const class_same_name = new Map<string, string>();

    for (const inputFile of controllerJavaFiles) {
      const javaContent = fs.readFileSync(inputFile, "utf8");
      const cst = parse(javaContent);
      const parserController = new ParserController({
        path_package,
        packageMappings: this.config.packageMappings,
      });
      parserController.visit(cst, { inputCode: javaContent });

      if (parserController.apiInfos.length) {
        const infos = new Set<string>();
        parserController.apiInfos.forEach((i) => {
          infos.add(i.method + i.url);
        });

        if (parserController.apiInfos.length !== infos.size) {
          console.log(chalk.red("存在重复的接口定义", inputFile));
          process.exit(1);
        } else {
          apiInfos.push(
            ...parserController.apiInfos.filter((i) => i.method && i.url)
          );
        }
      }
      [...parserController.needParserNames].forEach(([key, val]) => {
        needParserPaths.add(val.path);
        if (
          class_same_name.has(val.name) &&
          class_same_name.get(val.name) !== val.path
        ) {
          console.log(
            chalk.yellow(
              `发现同名类 ${val.path}，请检查是否存在同名类${class_same_name.get(val.name)}`
            )
          );
        } else {
          class_same_name.set(val.name, val.path);
        }
      });
      [...parserController.canNotParseNames].forEach((n) =>
        canNotParserNames.add(n)
      );

      controller_progressBar.increment();
    }
    controller_progressBar.stop();
    console.log(
      chalk.green(
        "解析成功，共计 " +
          apiInfos.length +
          " 个接口、" +
          needParserPaths.size +
          " 个类型"
      )
    );

    console.warn(
      chalk.yellow("未能解析的类型: " + [...canNotParserNames].join(", "))
    );

    const ora_Info = ora(chalk.blue("开始解析类型...")).start();
    let structures: Partial<AbstractStructures>[] = [];
    let count = 1;

    if (this.config.output.logName) {
      const log_outputDir = path.resolve(
        path.join(outputFolder, this.config.output.logName || "log.json")
      );

      const formatted = await prettier.format(
        JSON.stringify({
          path_package,
        }),
        {
          parser: "json",
        }
      );
      fs.writeFileSync(log_outputDir, formatted, "utf8");
    }

    while (needParserPaths.size > 0 && count > 0) {
      console.log(
        chalk.blue(
          `第${count}轮询解析类型，还剩 ` + needParserPaths.size + " 个类型"
        )
      );
      count++;

      if (count === 20) {
        console.log(
          chalk.red("类型解析多轮无变化，可能存在循环依赖，停止解析")
        );
        process.exit(1);
        break;
      }

      const parserInterface = new ParserInterface({
        path_package,
        packageMappings: this.config.packageMappings,
      });

      for (const path of [...needParserPaths]) {
        ora_Info.text = chalk.blue(`正在解析${path}...`);
        if (path_package[path]) {
          const inputCode = fs.readFileSync(path_package[path], "utf8");
          parserInterface.visit(parse(inputCode), { inputCode });
          needParserPaths.delete(path);
        } else {
          console.log(chalk.red(`未找到类型 ${path} 对应的文件，跳过该类型`));
        }
      }
      structures.push(...parserInterface.structures);

      if (parserInterface.needParserNames.size > 0) {
        [...parserInterface.needParserNames].forEach(([key, val]) => {
          needParserPaths.add(val.path);

          if (
            class_same_name.has(val.name) &&
            class_same_name.get(val.name) !== val.path
          ) {
            console.log(
              chalk.red(
                `发现同名类 ${val.path}，请检查是否存在同名类${class_same_name.get(
                  val.name
                )}`
              )
            );
            process.exit(1);
          } else {
            class_same_name.set(val.name, val.path);
          }
        });
      }
    }

    ora_Info.succeed("类型解析完成，共计 " + structures.length + " 个类型");

    // 生成输出内容
    console.log(chalk.blue("开始生成输出内容..."));

    structures = _.uniqBy(structures, "name");
    const tsContent = this.getTypeOutput(structures);

    const apiContent = this.getApiOutput?.(apiInfos) || "暂未配置getApiOutput";

    if (this.config.output.apiName) {
      const api_outputDir = path.resolve(
        path.join(outputFolder, this.config.output.apiName)
      );
      const formatted = await prettier.format(JSON.stringify(apiInfos), {
        parser: "json",
      });
      fs.writeFileSync(api_outputDir, formatted, "utf8");
    }

    if (this.config.output.logName) {
      const log_outputDir = path.resolve(
        path.join(outputFolder, this.config.output.logName || "log.json")
      );

      const formatted = await prettier.format(
        JSON.stringify({
          needParserPaths: [...needParserPaths],
          canNotParserNames: [...canNotParserNames],
          structures: [...structures],
        }),
        {
          parser: "json",
        }
      );
      fs.writeFileSync(log_outputDir, formatted, "utf8");
    }
    const generated =
      this.config.importTemplate + "\n\n" + tsContent + "\n\n" + apiContent;

    try {
      const formatted = await prettier.format(generated, {
        parser: "typescript",
      });
      fs.writeFileSync(generated_outputDir, formatted, "utf8");
    } catch (e) {
      console.log(chalk.red("Prettier 格式化失败, 请检查代码是否正确"));
      process.exit(1);
    }

    if (this.config.git) {
      console.log(chalk.blue("转换完成，去除java代码"));
      fs.rmSync(rootPath, { recursive: true });
    }

    console.log(chalk.green("转换完成，输出目录：" + outputFolder));
  }

  getTypeOutput(structures: Partial<AbstractStructures>[]) {
    let output = "";

    for (let i = 0; i < structures.length; i++) {
      const structure = structures[i];

      if (
        structure.abstractBody === undefined ||
        structure.abstractBody.length === 0
      ) {
        continue;
      }

      if (structure.name === undefined) {
        console.log(chalk.yellow("跳过未命名的结构体"));
        continue;
      }

      if (structure.comments && structure.comments.length > 0) {
        structure.comments.forEach((comment) => {
          output += `${comment}\n`;
        });
      }

      switch (structure.type) {
        case "enum":
          break;
        case "class":
          output += `export interface ${structure.name} ${
            structure.extendsName ? `extends ${structure.extendsName} ` : ""
          } {\n`;

          structure.abstractBody?.forEach((item) => {
            if (item.comments && item.comments.length > 0) {
              item.comments.forEach((comment) => {
                output += `${comment}\n`;
              });
            }

            if (!item.key || !item.value) {
              console.log(
                chalk.yellow(structure.name + " 存在未定义的 key 或 value")
              );
            }

            if (item.key !== undefined && item.value !== undefined) {
              output += `  ${item.key}${item.required ? "" : "?"}: ${
                item.value
              };\n`;
            }
          });
          output += `}\n\n`;
          break;
        case "array":
          output += `export const ${structure.name} = [\n`;
          structure.abstractBody.forEach((item) => {
            output += `  {\n`;

            item.children?.forEach((subItem) => {
              if (subItem.key !== undefined && subItem.value !== undefined) {
                output += `    ${subItem.key}: ${JSON.stringify(
                  subItem.value
                )},\n`;
              }
            });

            output += `  },\n`;
          });
          output += `];\n\n`;
          break;
        default:
          break;
      }
    }

    return output;
  }

  getApiOutput(apiInfos: ApiInfo[]) {
    let output = "";

    for (const api of apiInfos) {
      const finalApiInfo = this.config.formatApiInfo(api);

      let template = this.config.apiTemplate;

      Object.entries(finalApiInfo).forEach(
        ([finalApiInfoKey, finalApiInfoValue]) => {
          if (finalApiInfoValue) {
            template = template.replaceAll(
              this.config.apiInfoTemplateKey(finalApiInfoKey),
              finalApiInfoValue
            );
          }
        }
      );
      output += template;
      output += "\n\n";
    }

    return output;
  }
}
