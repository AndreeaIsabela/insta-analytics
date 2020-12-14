import { defineComponent, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'

const Navbar = defineComponent({
  setup () {
    const route = useRoute()
    const router = useRouter()

    const store: any = useStore()

    const isHome = computed(() => route.name === 'Login')
    // const isAuthenticated = computed(() => !!localStorage.getItem('accessToken'))
    const logout = () => {
      store.logout()
      router.push({ name: 'Login' })
    }

    return {
      store,
      logout,
      isHome
    }
  }
})

export default Navbar
