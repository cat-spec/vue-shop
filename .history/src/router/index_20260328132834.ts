import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 布局页
    {
      path: "/",
      component: () => import("@/view/Layout/index.vue"),
      children: [
        // 首页
        {
          path: "",
          component: () => import("@/view/Home/index.vue"),
        },
        // 分类页
        {
          path: "category/:id",
          component: () => import("@/view/Category/index.vue"),
        },{
          path:"category/sub/:id",
          component: () => import("@/view/SubCategory/index.vue"),
        },{
          path:"detail/:id",
          component: () => import("@/view/detail/index.vue"),
        }
      ],
    },
    // 登录页
    {
      path: "/login",
      component: () => import("@/view/Login/index.vue"),
    },
  ],
  scrollBehavior: () => ({
    top: 0,
    left: 0,
  }),
});

export default router;
