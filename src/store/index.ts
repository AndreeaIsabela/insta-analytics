import Vue from 'vue';
import Vuex from 'vuex';

import ILoginResponse from '../types/ILoginResponse';

Vue.use(Vuex)

const namespaced: boolean = true;

export default new Vuex.Store({
  state: {
    email: localStorage.getItem(btoa('emailAddress')) || '',
    token: localStorage.getItem(btoa('token')) || '',
    isLoggedIn: !! localStorage.getItem(btoa('token')),
  },
  mutations: {
    loginSuccess(state, loginResponse: ILoginResponse): void {
      state.email = loginResponse.email;
      state.token = loginResponse.token;
      state.isLoggedIn = true;
      localStorage.setItem(btoa('emailAddress'), loginResponse.email);
      localStorage.setItem(btoa('token'), loginResponse.token);
    },
    logoutSuccess(state): void {
      state.email = '';
      state.token = '';
      state.isLoggedIn = false;
      localStorage.removeItem(btoa('emailAddress'));
      localStorage.removeItem(btoa('token'));
    }
  },
  actions: {
    authenticateUser(context, loginResponse: ILoginResponse) {
      context.commit('loginSuccess', loginResponse);
    },
    destroySession(context): Promise<void> {
      return new Promise((resolve, reject) => {
        context.commit('logoutSuccess');
        resolve();
      });
    },
  }
})
