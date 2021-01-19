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
   * Get all Instagram media for the given user.
   *
   * @param {string} token
   * @returns {Promise<AxiosResponse>}
   */
  async getUserMedia (token: string): Promise<AxiosResponse> {
    const fields = 'id,media_type,media_url,timestamp,caption,username'
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`

    const { data } = await this.http.get(url)

    return data
  }
  /**
   * Get Instagram insights for the given user.
   *
   * @param {string} token
   * @returns {Promise<AxiosResponse>}
   */

  async getUserInsights (token: string): Promise<AxiosResponse> {
    const metrics = 'audience_city,audience_gender_age,audience_gender_age'
    const url = `https://graph.facebook.com/v9.0/me/insights?metric=${metrics}&period=lifetime&access_token=${token}`

    const { data } = await this.http.get(url)

    return data
  }
}
