import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import { vReveal } from './directives/reveal.js'
import './assets/theme.css'
import './assets/styles.css'

export const createApp = ViteSSG(App, ({ app }) => {
  app.directive('reveal', vReveal)
})
