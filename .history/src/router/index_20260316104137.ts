import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      // 布局页
   
   {
    path:'/',
     component:()=>import('@/view/Layout/index.vue')
   
   },
  // 登录页
   {
    path:'/login',
     component:()=>import('@/view/Login/index.vue')
   
   }
  ],
})

export default router
