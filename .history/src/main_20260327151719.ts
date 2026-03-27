import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {useIntersectionObserver} from "@vueuse/core"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

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
