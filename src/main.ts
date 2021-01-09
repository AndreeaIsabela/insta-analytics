import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import { createStore, storeSymbol } from './store'

import { unauthorizedInterceptor } from './interceptors/unautorized'

unauthorizedInterceptor(axios, router, createStore())

const app = createApp(App)
app.config.globalProperties.window = window

app.provide(storeSymbol, createStore())
app.use(router).mount('#app')
