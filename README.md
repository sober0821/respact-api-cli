# respact-api-cli

这是一个用于生成 API 代码的 CLI 工具。

⚠️⚠️⚠️本文将在`/example`目录下示范⚠️⚠️⚠️

## 安装

通过 npm 安装：

```bash
pnpm install respact-api-cli -D
```

## 使用

将以下指令添加到`package.json`中：

```json
{
  //  ...
  "scripts": {
    // ...
    "init-respact": "respact-api-cli init",
    "respact": "respact-api-cli convert"
  }
}
```

### 初始化

然后运行以下命令生成初始化文件`respact.config.ts`：

```bash
pnpm run init-respact
```

#### respact.config.ts

```typescript
import { ControllerBaseInfo, defineConfig } from "respact-api-cli";

const importTemplate = `
/**
 * 该内容由工具生成，请勿手动修改
 */

// import ... from "...";
`;

// function formatApiInfo(infos: ControllerBaseInfo[]): string {

//   // make some string if needed
//   return "";
// }

export default defineConfig({
  // git: {
  //   repo: "",
  //   branch: "master",
  // },
  // 输入
  source: {
    // Java 源文件目录
    dir: "/respact",
  },

  modules: {
    controller: {
      // Java Controller 目录 string | string[]
      // 支持.java、/**/、/**/*
      dir: [],
    },

    // 输出
    output: {
      dir: "./src/services", // 输出目录
      generatedName: "/generated.ts", // TypeScript 输出目录
      apiName: "/api.json", // Api 输出目录
      logName: "/log.json", // 日志输出目录
    },

    // 其他配置
    // Java 包名到 TypeScript 命名空间的映射
    packageMappings: {
      Long: "number",
      String: "string",
      Int: "number",
      Integer: "number",
      Boolean: "boolean",
      Float: "number",
      Double: "number",
      List: "Array",
      Map: "Record",
      Object: "Record<string, any>",
      Void: "void",
      Set: "Array",
    },
    importTemplate,
    // formatApiInfo,
  },
});
```

### 快速开始

我们先使用最基础的配置

```ts
import { defineConfig } from "respact-api-cli";
export default defineConfig({
  source: {
    dir: "/respact",
  },
  modules: {
    controller: {
      dir: "/src/main/java/com/example/controller",
    },
    output: {
      dir: "./services", // 输出目录
      generatedName: "/generated.ts", // TypeScript 输出目录
    },
    packageMappings: {
      Long: "number",
      String: "string",
      Int: "number",
      Integer: "number",
      Boolean: "boolean",
      Float: "number",
      Double: "number",
      List: "Array",
      Map: "Record",
      Object: "Record<string, any>",
      Void: "void",
      Set: "Array",
      T: "T",
    },
    importTemplate: "",
  },
});
```

respact目录下是准备的JAVA简易用户相关接口

```
example/respact/src/main/java/com/example/
├── controller/
│   └── UserController.java          # 用户控制器
└── dto/
    ├── User.java                     # 用户实体
    ├── CreateUserRequest.java        # 创建用户请求
    ├── UpdateUserRequest.java        # 更新用户请求
    └── ApiResponse.java              # 通用响应结构
```

这时一切准备就绪，运行

```bash
pnpm run respact
```

则可以看到配置文件对应的输出目录中已存在`generated.ts`文件。

## 许可证

[ISC](LICENSE)
