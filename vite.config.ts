import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";
// import shebang from "vite-plugin-shebang";

export default defineConfig({
  plugins: [
    // shebang(),
    dts({
      // 保持这个配置，它对于生成正确的 d.ts 文件至关重要
      include: ["src/type.ts", "src/vite-env.d.ts"],
      outDir: "dist",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // 1. 使用 Vite 的库模式
    lib: {
      // 2. 指定两个入口文件
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        type: path.resolve(__dirname, "src/type.ts"),
      },
      // 3. 指定输出格式为 CommonJS
      formats: ["cjs"],
      // 4. Rollup 会根据入口名自动生成文件名 (index.js, type.js)
    },
    rollupOptions: {
      // 5. 将所有依赖项都设置为外部依赖，避免打包进最终文件
      external: [
        "commander",
        "chalk",
        "java-parser",
        "jiti",
        "lodash",
        "prettier",
        "cli-progress",
        // Node.js 内置模块也必须外部化
        "fs",
        "path",
        "os",
        "util",
        "stream",
        "events",
        "child_process",
        "crypto",
        "http",
        "https",
        "url",
        "zlib",
        "readline",
        "buffer",
        "assert",
        "tty",
        "net",
        "dns",
        "module",
        "timers",
        "repl",
        "string_decoder",
        "vm",
        "perf_hooks",
        "worker_threads",
        "inspector",
        "constants",
        "dgram",
        "cluster",
        "process",
        "v8",
        "async_hooks",
      ],
    },
    // 6. 确保每次构建都清空 dist 目录
    emptyOutDir: true,
  },
});
