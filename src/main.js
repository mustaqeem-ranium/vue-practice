import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/css/tailwind.css";

createApp(App).use(router).use(router).mount('#app')
