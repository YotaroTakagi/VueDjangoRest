// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: false, // ポートがすでに使用されている場合に、次に使用可能なポートを自動で探すかどうか
    open: true,
    proxy: {
      '^api': {
        target: 'http://localhost:8000', // api/にリクエストを飛ばすとhttp://localhost:8000/apiに飛ぶ
        changeOrigin: true,
      },
    }
  },
  build: {
    outDir: '../dist/',
    assetsDir: 'static',
    sourcemap: false,
    emptyOutDir: true,
  },
  preview: {

  }
})
