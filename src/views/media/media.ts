import { defineComponent } from 'vue'
import moment from 'moment'

import { useStore } from '@/store'

const Media = defineComponent({
  setup () {
    const store: any = useStore()
    const media = store.state.media
    const allMedia = media.photos.concat(media.video.concat(media.album))
    const getTime = (date: string) => moment(date).fromNow()

    return {
      store,
      allMedia,
      getTime
    }
  }
})

export default Media
