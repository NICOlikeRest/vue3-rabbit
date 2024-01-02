// import './assets/main.css'  原本的css和现有的css冲突

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import { getCategoryAPI } from './apis/testAPI'

import '@/styles/common.scss'
// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'


// 测试接口函数
// getCategoryAPI().then(res => {
//     console.log(res);
// })



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


//定义全局指令
app.directive('img-lazy', {
    mounted (el, binding) {
        console.log(el, binding);
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                // console.log(isIntersecting)
                if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value
                    stop()
                }
            },
        )
    }
})
