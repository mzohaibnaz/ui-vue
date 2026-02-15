import path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
  
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MZUIVue",
      fileName: (format) => `ui-vue.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [
        "vue",
        "vue-tsc",
        "@mzohaibnaz/ui-core"
      ],
      output: {
        assetFileNames: "styles.[ext]",
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
