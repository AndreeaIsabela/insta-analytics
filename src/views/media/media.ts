import { defineComponent } from 'vue'
import moment from 'moment'

import { useStore } from '@/store'

const Media = defineComponent({
  setup () {
    const store = useStore()
    const getTime = (date: string) => moment(date).fromNow()

    return {
      store,
      getTime
    }
  }
})

export default Media
