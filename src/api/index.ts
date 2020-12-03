import axios from 'axios'

import { InstagramApi } from './instagram'

export const api = {
  instagram: new InstagramApi(axios)
}
