<template lang="pug">
div
  navbar
  router-view(v-bind:class="{view: !isHome}")
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'

import { api } from '@/api'
import { useStore } from '@/store'

const App = defineComponent({
  components: {
    navbar: Navbar
  },
  setup () {
    const store: any = useStore()
    const route = useRoute()
    const isHome = computed(() => route.name === 'Login')
    const token: string | null = localStorage.getItem('accessToken')
    const checkToken = async () => {
      if (token) {
        const { data } = await api.instagram.getUserMedia(token)
        store.setMedia(data)
      }
    }
    checkToken()
    return {
      isHome
    }
  }
})

export default App
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  .view
    margin-top: 60px !important
</style>
