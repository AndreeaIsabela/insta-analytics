import { defineComponent, inject } from 'vue'

import { storeSymbol } from '@/store'

const Photos = defineComponent({
  setup () {
    const store = inject(storeSymbol)

    return { store }
  }
})

export default Photos
