<template lang="pug">
div
  navbar
  router-view
</template>

<script lang="ts" >
import { defineComponent } from 'vue'
import Navbar from './components/navbar/Navbar.vue'

const App = defineComponent({
  components: {
    navbar: Navbar
  },
  setup () {
    return {
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
</style>
