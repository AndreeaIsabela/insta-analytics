import { defineComponent, reactive } from 'vue'
import moment from 'moment'

import { useStore } from '@/store'
import TimelineChart from '../../components/timelineChart/TimelineChart.vue'
import { Photo } from '@/types/photo'

const Stats = defineComponent({
  components: {
    TimelineChart
  },
  setup () {
    const data: any = reactive([])
    const store: any = useStore()
    const media = store.state.media
    const getDate = (timestamp: string) => {
      return moment(timestamp).format('L')
    }
    const addMediaToData = (mediaList: Photo[], mediaType: string, mediaType2: string, mediaType3: string) => {
      for (const media of mediaList) {
        const date = getDate(media.timestamp)
        const dateIndex = data.findIndex((el: any) => el.date === date)

        if (dateIndex !== -1) {
          data[dateIndex][mediaType] += 1
        } else {
          const obj = {
            date,
            [mediaType]: 1,
            [mediaType2]: 0,
            [mediaType3]: 0
          }
          data.push(obj)
        }
      }
    }
    addMediaToData(media.photos, 'photos', 'video', 'album')
    addMediaToData(media.video, 'video', 'photos', 'album')
    addMediaToData(media.album, 'album', 'photos', 'video')
    data.sort((a: any, b: any) => {
      if (a.date < b.date) {
        return -1
      }
      if (a.date > b.date) {
        return 1
      }
      return 0
    })
    // expose to template
    return {
      data
    }
  }
})

export default Stats
