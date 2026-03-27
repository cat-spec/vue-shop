import {useIntersectionObserver} from "@vueuse/core"
import { install } from "element-plus/lib"

export const lazyPlug={
    install(app){
        app.directive('img-lazy', {
    // （触发元素，指令绑定值）
         mounted(el, binding) {
        // 监听元素是否进入视口  （监听元素  监听元素是否进入视口）
        useIntersectionObserver(el, (isIntersecting) => {
            if (isIntersecting) {
                el.src = binding.value
            }
        })
    }
})
    }
}