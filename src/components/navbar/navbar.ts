import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

const Navbar = defineComponent({
  setup () {
    const route = useRoute()
    const isHome = computed(() => route.name === 'Login')
    const isAuthenticated = computed(() => !!localStorage.getItem('accessToken'))

    // expose to template
    return {
      isHome,
      isAuthenticated
    }
  }
})

export default Navbar
