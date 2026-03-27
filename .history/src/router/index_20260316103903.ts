import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    component:()=>import('@/view/Login/index.vue')
   },
   {
    path:'/layout',
    component:()=>import('@/view/Layout/index.vue')
   }
  ],
})

export default router
