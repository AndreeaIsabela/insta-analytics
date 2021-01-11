import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import { routerFactory } from './router'
import { createStore, storeSymbol } from './store'

import { unauthorizedInterceptor } from './interceptors/unautorized'

const store = createStore()
const router = routerFactory(store)

unauthorizedInterceptor(axios, router, store)

const app = createApp(App)
app.config.globalProperties.window = window

app.provide(storeSymbol, store)
app.use(router).mount('#app')
