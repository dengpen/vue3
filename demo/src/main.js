import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element plus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './main.css';

import remjs from './utils/rem.js'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

remjs()