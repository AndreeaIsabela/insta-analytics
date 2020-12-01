import { defineComponent, ref } from 'vue'

const Photos = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default Photos
