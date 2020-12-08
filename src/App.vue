<template lang="pug">
div
  navbar
  router-view(v-bind:class="{view: !isHome}")
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'

const App = defineComponent({
  components: {
    navbar: Navbar
  },
  setup () {
    const route = useRoute()
    const isHome = computed(() => route.name === 'Login')
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
