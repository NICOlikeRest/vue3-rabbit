// import './assets/main.css'  原本的css和现有的css冲突

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// import { getCategoryAPI } from './apis/testAPI'

import '@/styles/common.scss'

import { lazyPlugin } from '@/directives'

// 测试接口函数
// getCategoryAPI().then(res => {
//     console.log(res);
// })

import { componentPlugin } from '@/components'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')



