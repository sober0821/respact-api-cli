import fs from "fs";
import { IToken } from "java-parser";
import path from "path";

// 递归获取所有 Java 文件
export function getAllJavaFiles(dir: string): string[] {
  if (dir.endsWith(".java")) {
    const normalizedPath = dir.replace(/\\/g, "/");
    return [normalizedPath];
  }

  if (dir.endsWith("/*")) {
    const list = fs.readdirSync(dir.replace("*", ""));
    let results: string[] = [];
    list.forEach((fileName) => {
      const file = path.join(dir.replace("*", ""), fileName);
      if (file.endsWith(".java")) {
        const normalizedPath = file.replace(/\\/g, "/");
        results.push(normalizedPath);
      }
    });
    return results;
  }

  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllJavaFiles(filePath));
    } else if (file.endsWith(".java")) {
      // 在将路径添加到结果之前，将其规范化为使用正斜杠
      const normalizedPath = filePath.replace(/\\/g, "/");
      results.push(normalizedPath);
    }
  });
  return results;
}
export function importToNames(importName: string) {
  return importName
    .split(".")
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join("");
}

export function getImage(obj: { Identifier?: IToken[] }) {
  return obj.Identifier?.[0].image;
}

export function getLine(obj: { Identifier?: IToken[] }) {
  return obj.Identifier?.[0].startLine;
}

export function encryptionClassName({
  code,
  importsNames,
  startOffset,
  endOffset = 0,
  packageMappings,
  callback,
}: {
  code: string;
  importsNames?: Map<
    string,
    {
      name: string;
      path: string;
    }
  >;
  startOffset: number;
  endOffset?: number;
  packageMappings?: { [key: string]: string };
  callback?: (val: {
    className: string;
    path: string;
    packageName: string;
  }) => void;
}) {
  const valueArray = tokenizeJavaType(
    code.slice(startOffset, endOffset + 1).trim()
  );
  const DEFAULT_TYPE_MAP = packageMappings || {};
  // 记录需要继续解析的类
  const value = valueArray
    .map((i) => {
      // 过滤掉基础类型

      const simpleType = i.charAt(0).toUpperCase() + i.slice(1);

      if (!DEFAULT_TYPE_MAP[simpleType]) {
        const className = importsNames?.get(i)?.name;
        const path = importsNames?.get(i)?.path;
        if (className && path) {
          callback?.({
            className,
            path,
            packageName: i,
          });
          // return className;
        }
        return i;
      } else {
        return DEFAULT_TYPE_MAP[simpleType];
      }
    })
    .join("");

  return value;
}
export function encryptionClassNameTest({
  code,
  importsNames,
  startOffset,
  endOffset = 0,
  packageMappings,
  callback,
}: {
  code: string;
  importsNames?: Set<string>;
  startOffset: number;
  endOffset?: number;
  packageMappings?: { [key: string]: string };
  callback?: (val: { className: string; packageName?: string }) => void;
}) {
  const valueArray = tokenizeJavaType(
    code.slice(startOffset, endOffset + 1).trim()
  );
  const DEFAULT_TYPE_MAP = packageMappings || {};
  // 记录需要继续解析的类
  const value = valueArray
    .map((i) => {
      // 过滤掉基础类型

      const simpleType = i.charAt(0).toUpperCase() + i.slice(1);
      if (DEFAULT_TYPE_MAP[simpleType]) {
        return DEFAULT_TYPE_MAP[simpleType];
      }

      // 如果simpleType是非字母和数字的组合，直接返回
      if (simpleType && !/^[a-zA-Z0-9]+$/.test(simpleType)) {
        return i;
      }

      const packageName = [...(importsNames || [])].find((j) =>
        j.endsWith(`.${i}`)
      );
      callback?.({
        className: i,
        packageName,
      });
      return i;
    })
    .join("");

  return value;
}
export function tokenizeJavaType(typeString: string): string[] {
  if (!typeString) {
    return [];
  }

  // 这个正则表达式匹配以下两种情况之一：
  // 1. 一个或多个连续的字母、数字或下划线（即类型名称）
  // 2. 单个的 '<' 或 '>' 或 ',' 字符
  const regex = /[a-zA-Z0-9_]+|[<>,]/g;

  const tokens = typeString.match(regex);

  // 如果没有匹配项，string.match() 可能返回 null，所以我们返回一个空数组
  return tokens || [];
}
