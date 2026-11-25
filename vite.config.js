import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { buildJsonLdScripts } from './src/data/seo.js'

const injectJsonLd = () => ({
  name: 'inject-jsonld',
  transformIndexHtml(html) {
    return html.replace('<!-- JSONLD_INJECT -->', buildJsonLdScripts())
  },
})

export default defineConfig({
  // preserve: spasi antar elemen sama seperti HTML asli, supaya tampilan tidak bergeser
  plugins: [vue({ template: { compilerOptions: { whitespace: 'preserve' } } }), injectJsonLd()],
  server: { port: 8080 },
})
