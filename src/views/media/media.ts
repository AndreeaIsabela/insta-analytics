import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import moment from 'moment'

import { useStore } from '@/store'

const Media = defineComponent({
  setup () {
    const router = useRouter()
    const store: any = useStore()
    const searchedWord: any = ref('')
    const media = store.state.media
    const temp = media.video.concat(media.album)
    const allMedia = media.photos.concat(temp)

    const getTime = (date: string) => moment(date).fromNow()
    const getDetails = (photoId: string) => router.push( { name: 'MediaDetails', params: { photoId } })

    const resources = computed(() => {
      const files = allMedia.filter((media: any) => {
        return (
          media.caption.toLowerCase().indexOf(searchedWord.toLowerCase()) >= 0
        )
      })
      return files
    })

    return {
      store,
      allMedia,
      searchedWord: searchedWord.value,
      resources,
      getTime,
      getDetails
    }
  }
})

export default Media
