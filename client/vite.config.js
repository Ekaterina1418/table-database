import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/table-database/',
  plugins: [vue(), vueJsx()],
  root: './client',
  build: {
    outDir: 'dist',
  },
  rollupOptions: {
    input: {
      main: './client/src/main.js',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
})
