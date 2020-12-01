import { defineComponent, ref } from 'vue'

const Albums = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default Albums
