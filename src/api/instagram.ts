import { AxiosResponse, AxiosStatic } from 'axios'

export class InstagramApi {
  private http: AxiosStatic;

  /**
   * Inject http module into constructor.
   *
   * @param {AxiosStatic} http
   */
  constructor (http: AxiosStatic) {
    this.http = http
  }

  /**
   * Get all Instagram photos for the given user.
   *
   * @param {string} token
   * @returns {Promise<AxiosResponse>}
   */
  async getUserMedia (token: string): Promise<AxiosResponse> {
    const fields = 'id,media_type,media_url,timestamp'
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`

    const { data } = await this.http.get(url)

    return data
  }
}
