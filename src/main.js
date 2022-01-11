import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://test-api.ctboard.net'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).mount('#app')
