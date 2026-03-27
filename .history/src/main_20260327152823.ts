import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { lazyPlug } from './utils/Plug'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlug)

app.mount('#app')


