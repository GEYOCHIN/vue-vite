import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

//1. 路由配置
const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },

]

// 2. 创建路由实例
const router = createRouter({
  // （1）采用hash 模式
  history: createWebHashHistory(),
  // （2）采用 history 模式
  // history: createWebHistory(),
  routes, //使用上方定义的路由配置
})

// 3. 导出router
export default router