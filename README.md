# respact-api-cli

这是一个用于生成 API 代码的 CLI 工具。通过拉取Java代码并分析出接口的基础信息，包括（method、URL、request、response等信息），再生成TypeScript所需的类型，并且可以根据接口信息去生成项目可用的Api方法。

## 特别鸣谢

[java-parser](https://github.com/jhipster/prettier-java)

## 注意⚠️

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

```TypeScript
/**
 * 通用API响应结构
 */
export interface ApiResponse<T = Object> {
  /**
   * 响应码
   */
  code?: number;
  /**
   * 响应消息
   */
  message?: string;
  /**
   * 响应数据
   */
  data?: T;
  /**
   * 时间戳
   */
  timestamp?: number;
  /**
   * 成功标识
   */
  success?: boolean;
}

/**
 * 用户信息
 */
export interface User {
  /**
   * 用户ID
   */
  id?: number;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 邮箱地址
   */
  email?: string;
  /**
   * 用户年龄
   */
  age?: number;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 用户角色列表
   */
  roles?: Array<string>;
  /**
   * 用户头像URL
   */
  avatar?: string;
}

/**
 * 创建用户请求
 */
export interface CreateUserRequest {
  /**
   * 用户名（必填）
   */
  username?: string;
  /**
   * 邮箱地址（必填）
   */
  email?: string;
  /**
   * 用户年龄
   */
  age?: number;
  /**
   * 用户头像URL
   */
  avatar?: string;
}

/**
 * 更新用户请求
 */
export interface UpdateUserRequest {
  /**
   * 用户名
   */
  username?: string;
  /**
   * 邮箱地址
   */
  email?: string;
  /**
   * 用户年龄
   */
  age?: number;
  /**
   * 用户头像URL
   */
  avatar?: string;
  /**
   * 是否激活
   */
  active?: boolean;
}

const apiContent = [
  {
    classModifiers: [
      {
        typeName: "RestController",
      },
      {
        typeName: "RequestMapping",
        config: {
          value: "/api/users",
        },
      },
    ],
    className: "UserController",
    fields: [
      {
        fieldModifiers: [
          {
            typeName: "GetMapping",
          },
        ],
        result: "ApiResponse<Array<User>>",
      },
      {
        fieldModifiers: [
          {
            typeName: "GetMapping",
            config: {
              value: "/{id}",
            },
          },
        ],
        result: "ApiResponse<User>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "number",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "PostMapping",
          },
        ],
        result: "ApiResponse<User>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "CreateUserRequest",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "PutMapping",
            config: {
              value: "/{id}",
            },
          },
        ],
        result: "ApiResponse<User>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "number",
            name: "id",
          },
          {
            modifiers: ["RequestBody"],
            type: "UpdateUserRequest",
            name: "request",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "DeleteMapping",
            config: {
              value: "/{id}",
            },
          },
        ],
        result: "ApiResponse<string>",
        params: [
          {
            modifiers: ["PathVariable"],
            type: "number",
            name: "id",
          },
        ],
      },
      {
        fieldModifiers: [
          {
            typeName: "DeleteMapping",
            config: {
              value: "/batch",
            },
          },
        ],
        result: "ApiResponse<string>",
        params: [
          {
            modifiers: ["RequestBody"],
            type: "Array<number>",
            name: "ids",
          },
        ],
      },
    ],
  },
];

```

#### respact.config.ts

```typescript
interface ModuleConfig {
  // Java Controller 目录 string | string[]
  // 支持.java、/**/、/**/*
  controller: { dir: string | string[] };

  // 生成的文件头部内容配合formatApiInfo使用
  importTemplate?: string;
  // 如果没有配置formatApiInfo则会生成ControllerBaseInfo[]类型的JSON
  // 作用：通过二次解析controller生成的结构，去生成对应的前端接口方法
  formatApiInfo?: (api: ControllerBaseInfo[]) => string;

  output: {
    // 生成的文件根目录
    dir: string;
    // 生成的文件名
    generatedName: string;
    // ControllerBaseInfo[]类型的JSON
    apiName?: string;
    // 所有需要的类型
    logName?: string;
  };
  // 用来处理JAVA====>TS的类型映射
  packageMappings: { [key: string]: string };
}

export interface RespactConfig {
  // 如果配置了git，则会拉取对应分支的代码到source.dir目录下
  git?: {
    // git地址
    repo: string;
    // 分支
    branch?: string;
  };
  // Java文件的根目录
  source: { dir: string };
  // 具体配置
  modules: ModuleConfig | (ModuleConfig & { name: string })[];
}
```

## 许可证

[ISC](LICENSE)
