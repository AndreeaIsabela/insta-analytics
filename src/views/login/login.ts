import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { api } from '@/api'
import { useStore } from '@/store'

const LoginView = defineComponent({
  setup () {
    const store: any = useStore()
    const router = useRouter()

    const login = (provider: string) => {
      const url = `/api/user/auth/${provider}`
      const myWidth = 700
      const myHeight = 800
      const left: number = (screen.width - myWidth) / 2
      const top: number = (screen.height - myHeight) / 4

      window.open(url, 'Login', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${myWidth}, height=${myHeight}, top=${top}, left=${left}`)
    }

    onMounted(() => {
      (window as any).authenticateCallback = async function (token: string) {
        try {
          store.auth(token)
          const { data } = await api.instagram.getUserMedia(token)

          store.setMedia(data)

          router.push({ name: 'Media' })
        } catch (error) {
          alert(error.message)
        }
      }
    })
    return {
      login,
      store
    }
  }
})

export default LoginView
