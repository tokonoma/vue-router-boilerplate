import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/buzz',
      name: 'buzz',
      component: () => import('./views/AboutBuzz.vue')
    },
    {
      path: '/creators',
      name: 'creators',
      component: () => import('./views/Creators.vue')
    },
    {
      path: '/disclaimer',
      name: 'disclaimer',
      component: () => import('./views/Disclaimer.vue')
    },
    {
      path: '/reading',
      name: 'reading',
      component: () => import('./views/Reading.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
// })

export default router
