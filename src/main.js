import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/app.min.css'
import './assets/css/fontawesome.min.css'
import './assets/css/style.css'
import { createPinia } from 'pinia'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(Vue3Toastify)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
