import { AxiosStatic } from 'axios'
import { Router } from 'vue-router'

/**
 * Register unauthorized interceptor.
 *
 * @param {AxiosStatic} axios
 * @param {Router} router
 * @param {any} store
 * @returns {void}
 */
export function unauthorizedInterceptor (axios: AxiosStatic, router: Router, store: any): void {
  axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response.status === 400 || error.response.status === 401) {
        store.logout()
        router.push({ name: 'Login' })
      }
    }
  )
}
