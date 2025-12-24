import { createApp } from 'vue'
import { i18n } from '@/locales'
import { router } from '@/router'
import App from './App.vue'
import '@/assets/css/index.css'

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
