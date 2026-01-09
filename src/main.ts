import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
// import VueGtag from 'vue-gtag'
import { createHead } from '@unhead/vue'

// import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';


// import generatedRoutes from 'virtual:generated-pages'
// const routes = generatedRoutes
import { routes } from 'vue-router/auto-routes'
// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
const ga = 'G-XEFWKC8EXG'
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: setupLayouts(routes) },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    // app.use(VueGtag, {
    //   config: { id: ga, },
    // }, router),
    createHead()
  }
)
