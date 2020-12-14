import { defineComponent, reactive, onMounted } from 'vue'
import moment from 'moment'

import { useStore } from '@/store'
import TimelineChart from '../../components/timelineChart/TimelineChart.vue'

const Stats = defineComponent({
  components: {
    TimelineChart
  },
  setup () {
    const data: any = reactive([])
    const store: any = useStore()
    const getDate = (timestamp: string) => {
      return moment(timestamp).format('L')
    }
    onMounted((): void => {
      for (const photo of store.state.media) {
        const date = getDate(photo.timestamp)
        const dateIndex = data.findIndex((el: { date: string; value: number }) => el.date === date)
        if (dateIndex) {
          data[dateIndex].value += 1
        } else {
          const value = 1
          data.push({ date, value })
        }
      }
    })
    // expose to template
    return {
      data
    }
  }
})

export default Stats
