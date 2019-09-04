import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'
Vue.use(Router)

export default new Router({
  // mode: 'history', // 没有#
  mode: 'hash', // 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
  base: process.env.BASE_URL,
  routes: [
    { // 路由的重定向
      path: '/',
      redirect: '/home'
    },
    {
      path: '/detail/:id', // :id中的id代表参数的名称
      name: 'detail', // 命名路由 --- 可结合声明式跳转传参
      components: {
        default: () => import('@/views/detail/index.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/register/index.vue')
      }
    },
    {
      path: '/home',
      // alias: '/h',
      name: 'home',
      components: {
        default: () => import('@/views/home/index.vue'), // 路由懒加载
        footer: Footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('@/views/kind/index.vue'), // 路由懒加载
        footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('@/views/cart/index.vue'), // 路由懒加载
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue'), // 路由懒加载
        footer: Footer
      },
      children: [
        {
          path: '',
          redirect: 'nologin'
        },
        {
          path: 'nologin', // 前面不要加/ ，你要的是 /user/nologin 加了就变成 /nologin
          name: 'nologin',
          component: () => import('@/components/user/Nologin.vue')
        },
        {
          path: 'loging',
          name: 'loging',
          component: () => import('@/components/user/Loging.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/notfound/index.vue')
    }
  ]
})
