import { Photo } from '@/types/photo'

export interface State {
  token: string;
  isLoggedIn: boolean;
  media: {
    photos: Photo[],
    video: Photo[],
    album: Photo[]
  }
}
