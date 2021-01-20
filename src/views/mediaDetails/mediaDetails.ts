import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

const MediaDetails = defineComponent({
  setup () {
    const route = useRoute()
    const mediaId = route.params.id

    return {
      mediaId
    }
  }

})

export default MediaDetails
