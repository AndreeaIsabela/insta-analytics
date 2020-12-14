import { reactive, provide, inject, readonly } from 'vue'

import { Photo } from '@/types/photo'
import { State } from '@/types/state'

export const storeSymbol = Symbol('store')
export const createStore = () => {
  const state: State = reactive({
    token: localStorage.getItem('accessToken') || '',
    isLoggedIn: !!localStorage.getItem('accessToken'),
    media: []
  })

  const auth = (token: string) => {
    state.token = token
    localStorage.setItem('accessToken', token)
    state.isLoggedIn = true
  }

  const setMedia = (media: Photo[]) => {
    media.forEach((photo: Photo) => {
      state.media.push(photo)
    })
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    state.media = []
    state.isLoggedIn = false
    state.token = ''
  }

  return {
    auth,
    setMedia,
    logout,
    state: readonly(state)
  }
}

export const useStore = () => inject(storeSymbol)
export const provideStore = () => provide(storeSymbol, createStore())
