import "modern-normalize/modern-normalize.css"
import './styles/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import oruga from "./oruga"
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(oruga)
app.use(router)
app.mount('#app')
