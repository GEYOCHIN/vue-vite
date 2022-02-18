import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from "vite-plugin-style-import";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
    legacy({ 
      targets: ['> 1%, last 2 version, ie >= 11'], // 需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
      polyfills: ['es.promise.finally', 'es/map', 'es/set'], 
      modernPolyfills: ['es.promise.finally']
      // targets: ["> 0.5%, last 5 versions, iOS 10"],
      // modernPolyfills: true,
    }),
  ],
  server: {
    // host: '',
    port: 9001,
    proxy: {
      "/active": {
        target: "https://fx.hekouxin.com",
        changeOrigin: true,
      },
    },
  },
  build: {
    assetsDir: 'static', //静态资源目录名称
    chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）
  },
})
