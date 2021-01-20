import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'

import { api } from '@/api'

const MediaDetails = defineComponent({
  setup () {
    const route = useRoute()
    const mediaId: string = route.params.id as string
    const token: string | null = localStorage.getItem('accessToken')

    const mediaDetails: any = async () => {
      if (token) return await api.instagram.getUserMediaDetails(token, mediaId)
    }

    const getTime = (date: string) => moment(date).fromNow()

    return {
      mediaId,
      mediaDetails,
      getTime
    }
  }

})

export default MediaDetails
