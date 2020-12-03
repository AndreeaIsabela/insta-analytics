<template lang="pug">
.container
  #nav
    router-link(to="/") Home
    router-link.ml-3(to="/photos") Photos
  router-view
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
