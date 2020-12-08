import { defineComponent, computed } from 'vue'
import moment from 'moment'

import { useStore } from '@/store'

const Photos = defineComponent({
  setup () {
    const store = useStore()
    const time = computed((date: string) => moment(date).fromNow())

    return {
      store,
      time
    }
  }
})

export default Photos
