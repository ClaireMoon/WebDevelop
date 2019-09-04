import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'
Vue.use(Router)
const router = new Router({
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
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/login/index.vue')
      }
    },
    {
      path: '/ele',
      name: 'ele',
      components: {
        default: () => import('@/views/ele/index.vue')
      }
    },
    {
      path: '/home',
      // alias: '/h',
      name: 'home',
      components: {
        default: () => import('@/views/home/index.vue'), // 路由懒加载
        footer: Footer
      },
      meta: {
        keepAlive: true
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
      // 路由独享的导航守卫 ---- 一般不推荐直接使用
      // beforeEnter (to, from, next) {
      //   if (localStorage.getItem('isLogin') === 'ok') {
      //     next()
      //   } else {
      //     next('/login')
      //   }
      // }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue'), // 路由懒加载
        footer: Footer
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'nologin'
        // },
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

// 全局的导航守卫 --- 所有的路由都会先经过这里
// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   // console.log(from)
//   // next()
//   // 假设所有的页面都需要登陆 ------ 除了登陆路由
//   if (to.name === 'login') {
//     next()
//   } else {
//     if (localStorage.getItem('isLogin') === 'ok') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

export default router
