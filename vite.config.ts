import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
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
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        type: path.resolve(__dirname, "src/type.ts"),
      },
      formats: ["cjs"],
    },
    rollupOptions: {
      external: [
        "commander",
        "chalk",
        "java-parser",
        "jiti",
        "lodash",
        "prettier",
        "cli-progress",
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
    emptyOutDir: true,
  },
});
