import { createRouter, createWebHashHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHashHistory(),
  // pass the generated routes written by the plugin 🤖
  routes,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}
