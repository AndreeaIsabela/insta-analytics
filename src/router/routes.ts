import { RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/Login.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    meta: {
      forVisitors: true
    },
    component: Login
  },
  {
    path: '/stats',
    name: 'Stats',
    meta: {
      forVisitors: false
    },
    component: () => import(/* webpackChunkName: "stats" */ '@/views/stats/Stats.vue')
  },
  {
    path: '/media',
    name: 'Media',
    meta: {
      forVisitors: false
    },
    component: () => import(/* webpackChunkName: "media" */ '@/views/media/Media.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkNameL "404" */ '@/views/notFound/NotFound.vue')
  }
]
