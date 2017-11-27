import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Ue from '@/page/ue'
import Input from '@/page/input'
import Login from '@/page/login'
import cookie from '../utils/cookie.js'

Vue.use(Router)

const router =  new Router({
  routes: [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
   {
    path: '/',
    name: 'index',
    meta: {
        requireAuth: true,
    },
    component: Index
   },
   {
    path: '/content/:id',
    meta: {
        requireAuth: true,
    },
    component: Content
   },
   {
   	path: '/ue',
    meta: {
        requireAuth: true,
    },
   	component: Ue
   },
   {
    path: '/input',
    meta: {
        requireAuth: true,
    },
    component: Input
   }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (cookie.getCookie("login") == "success") {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: '/'}
            })
        }
    }
    else {
        next();
    }
})

export default router;
