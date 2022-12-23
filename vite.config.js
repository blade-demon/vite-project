import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    https: false,
    port: 3000,
    host: "0.0.0.0",
    open: true,
    cors: true,
    // 自定义代理机制：
    proxy: {},
  },

  build: {
    // 设置最终构建的浏览器兼容目标
    target: "2015",
    // 构建后是否生成source map 文件
    sourcemap: false,
    // chunk 大小告警设置
    chunkSizeWarningLimit: 2000,
    // 启用/禁用gzip 压缩大小报告
    reportCompressedSize: false,
  },
});
