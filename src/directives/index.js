import { useIntersectionObserver } from '@vueuse/core'

//定义懒加载
export const lazyPlugin = {
    install (app) {
        //定义全局指令
        app.directive('img-lazy', {
            mounted(el, binding) {
                // console.log(el, binding);
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

    }
}