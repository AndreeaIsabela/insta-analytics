import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

const Navbar = defineComponent({
  setup () {
    const route = useRoute()
    const isHome = computed(() => route.name === 'Login')

    // expose to template
    return {
      isHome
    }
  }
})

export default Navbar
