import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import remjs from './utils/rem.js'

createApp(App).use(store).use(router).mount('#app')

remjs(window, document)