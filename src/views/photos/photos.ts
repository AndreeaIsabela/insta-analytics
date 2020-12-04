import { defineComponent } from 'vue'

import { useStore } from '@/store'

const Photos = defineComponent({
  setup () {
    const store = useStore()

    return { store }
  }
})

export default Photos
