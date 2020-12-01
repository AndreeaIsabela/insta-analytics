import { defineComponent, ref } from 'vue'

const LoginView = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default LoginView
