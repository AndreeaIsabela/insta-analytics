import { defineComponent, computed } from 'vue'
import moment from 'moment'

import { useStore } from '@/store'

const Photos = defineComponent({
  setup () {
    const store = useStore()
    const getTime = (date: string) => moment(date).fromNow()

    return {
      store,
      getTime
    }
  }
})

export default Photos
