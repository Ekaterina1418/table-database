import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: '/table-database/',
  plugins: [vue(), vueJsx()],
  root: '../client', // Папка, где находится ваш код
  build: {
    outDir: '../dist', // Папка для сборки относительно корня проекта
    rollupOptions: {
      input: 'index.html', // Путь к вашему входному HTML файлу относительно корня проекта
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Путь к папке src
    },
  },
})
