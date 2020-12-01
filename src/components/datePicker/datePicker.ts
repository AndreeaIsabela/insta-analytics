import { defineComponent, ref } from 'vue'

const DatePicker = defineComponent({
  setup () {
    const ceva = ref('altceva')

    // expose to template
    return {
      ceva
    }
  }
})

export default DatePicker