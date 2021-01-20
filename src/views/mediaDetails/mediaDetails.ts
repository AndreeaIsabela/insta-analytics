import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'

import { api } from '@/api'

const MediaDetails = defineComponent({
  setup () {
    const route = useRoute()
    const mediaId: string = route.params.id as string
    const token: string | null = localStorage.getItem('accessToken')
    let mediaDetails: any = {}

    const getTime = (date: string) => moment(date).fromNow()
    const checkToken = async () => {
      if (token) {
        mediaDetails = await api.instagram.getUserMediaDetails(token, mediaId)
      }
    }
    checkToken()

    return {
      mediaId,
      mediaDetails,
      getTime
    }
  }

})

export default MediaDetails
