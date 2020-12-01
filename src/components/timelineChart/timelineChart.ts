import { defineComponent, ref } from 'vue'

const TimelineChart = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default TimelineChart