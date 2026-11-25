import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // preserve: spasi antar elemen sama seperti HTML asli, supaya tampilan tidak bergeser
  plugins: [vue({ template: { compilerOptions: { whitespace: 'preserve' } } })],
  server: { port: 8080 },
})
