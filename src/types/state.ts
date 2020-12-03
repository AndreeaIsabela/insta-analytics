import { Photo } from '@/types/photo'

export interface State {
  token: string;
  isLoggedIn: boolean;
  photos: Photo[];
  found: boolean;
}
