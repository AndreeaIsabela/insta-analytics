import { defineComponent, ref } from 'vue'

const PieChart = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default PieChart