import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录页
   {
    path:'/',
    component:()=>import('@/view/Login/index.vue')
   },
   // 布局页
   {
    path:'/layout',
    component:()=>import('@/view/Layout/index.vue')
   }
  ],
})

export default router
