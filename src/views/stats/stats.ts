import { defineComponent, reactive } from 'vue'
import moment from 'moment'

import { useStore } from '@/store'
import TimelineChart from '../../components/timelineChart/TimelineChart.vue'
import { Photo } from '@/types/photo'
import PieChart from '../../components/pieChart/PieChart.vue'

import { api } from '@/api'

const Stats = defineComponent({
  components: {
    TimelineChart,
    PieChart
  },
  setup () {
    const data: any = reactive([])
    const store: any = useStore()
    const media = store.state.media
    const token: string | null = localStorage.getItem('accessToken')
    const checkToken = async () => {
      if (token) {
        // const insights = await api.instagram.getUserInsights(token)
        // console.log(insights)
        // console.log(insights.data)
      }
    }
    checkToken()
    const pieChartData = [
      {
        name: 'photos',
        number: media.photos.length
      },
      {
        name: 'video',
        number: media.video.length
      },
      {
        name: 'album',
        number: media.album.length
      }
    ]
    const getDate = (timestamp: string) => {
      return moment(timestamp).format('YYYY-MM-DD')
    }
    const addMediaToData = (mediaList: Photo[], mediaType: string, mediaType2: string, mediaType3: string) => {
      for (const media of mediaList) {
        const date = getDate(media.timestamp)
        const dateIndex = data.findIndex((el: any) => el.date === date)

        if (dateIndex !== -1) {
          data[dateIndex][mediaType] += 1
        } else {
          const obj = {
            dateObj: date,
            date: new Date(media.timestamp),
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
      data,
      pieChartData
    }
  }
})

export default Stats
