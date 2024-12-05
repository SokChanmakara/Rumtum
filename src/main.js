import './assets/main.css';
import 'primeicons/primeicons.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './stores/index.js' 

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
