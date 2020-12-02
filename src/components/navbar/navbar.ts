import { defineComponent, ref } from 'vue'

const Navbar = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default Navbar
