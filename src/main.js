import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './stores/index.js' // Ensure the path is correct

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
