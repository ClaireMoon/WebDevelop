import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('@/views/detail/index.vue')
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/home/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('@/views/kind/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('@/views/cart/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue'),
        footer: Footer
      },
      children: [
        {
          path: '',
          redirect: 'nologin'
        },
        {
          path: 'nologin',
          name: 'nologin',
          component: () => import('@/components/user/nologin.vue')
        },
        {
          path: 'logining',
          name: 'logining',
          component: () => import('@/components/user/logining.vue')
        }
      ]
    }
  ]
})
