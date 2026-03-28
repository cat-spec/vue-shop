import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { lazyPlug } from './utils/Plug'
import {componentPlugin} from '@/components'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlug)
app.use(componentPlugin)

app.mount('#app')


