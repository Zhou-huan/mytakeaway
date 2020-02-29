import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'// 重定向的地址
  },
  {
    path:'/home',
    name:'home',
    component: ()=>import('@/views/Home.vue'),
    children:[
      {
        path: 'product',
        name: 'product',
        component: ()=>import('@/views/Product.vue')
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('@/views/Comment.vue')
      },
      {
        path: 'business',
        name: 'business',
        component: () => import('@/views/Business.vue')
      }
    ]
  },
  //出现错误时，配置路由
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  routes
})

export default router
