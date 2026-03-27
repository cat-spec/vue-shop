import { fileURLToPath, URL } from 'node:url'
// 自动导入 Element Plus 相关函数，如：ElMessage, ElNotification
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    css: {
    preprocessorOptions: {
      // 全局 scss 变量
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `,
      },
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
     AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle: 'sass'})],
    }),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
