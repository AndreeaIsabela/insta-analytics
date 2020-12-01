import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import(/* webpackChunkName: "albums" */ '../views/albums/Albums.vue')
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import(/* webpackChunkName: "stats" */ '../views/stats/Stats.vue')
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import(/* webpackChunkName: "photos" */ '../views/photos/Photos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
