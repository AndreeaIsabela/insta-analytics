import { reactive, provide, inject, readonly } from 'vue'

import { Photo } from '@/types/photo'
import { State } from '@/types/state'

export const storeSymbol = Symbol('store')
export const createStore = () => {
  const state: State = reactive({
    token: localStorage.getItem('accessToken') || '',
    isLoggedIn: !!localStorage.getItem('accessToken'),
    photos: [],
    albums: []
  })

  const auth = (token: string) => {
    state.token = token
    localStorage.setItem('accessToken', token)
  }

  const setAlbums = (photos: Photo[]) => {
    photos.forEach((photo: Photo) => {
      if (photo.media_type !== 'IMAGE') {
        state.albums.push(photo)
      }
    })
  }

  const setPhotos = (photos: Photo[]) => {
    photos.forEach((photo: Photo) => {
      if (photo.media_type === 'IMAGE') {
        state.photos.push(photo)
      }
    })
  }

  return {
    auth,
    setAlbums,
    setPhotos,
    state: readonly(state)
  }
}

export const useStore = () => inject(storeSymbol)
export const provideStore = () => provide(storeSymbol, createStore())
