import { Photo } from '@/types/photo'

export interface State {
  token: string;
  isLoggedIn: boolean;
  media: Photo[];
}
