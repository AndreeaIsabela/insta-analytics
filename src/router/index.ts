import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'

export function routerFactory (store: any) {
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  router.beforeEach((to, from, next) => {
    if (to.meta.forVisitors) {
      if (!store.state.isLoggedIn) {
        next()
      } else {
        next({ name: 'Media' })
      }
    } else {
      if (store.state.isLoggedIn) {
        next()
      } else {
        next({ name: 'Login' })
      }
    }
  })

  return router
}
