import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem(btoa('token')) || '',
    isLoggedIn: !!localStorage.getItem(btoa('token'))
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
