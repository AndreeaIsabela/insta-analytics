import { defineComponent, ref } from 'vue'

const Stats = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default Stats
