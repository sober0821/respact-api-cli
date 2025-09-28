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
