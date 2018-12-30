import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class TheMovieDB extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.themoviedb.org/3/"
  }

  willSendRequest(request: RequestOptions) {
    request.params.set('api_key', this.context.apiKey)
  }

  async getMovieByID(movieId: number) {
    const data = await this.get(`movie/${movieId}`)
    return data
  }

  async getMoviesByTitle(title: string) {
    const searchReslut = await this.get(`search/movie/?query=${title}`)
    const data = searchReslut.results
    return data
  }
}
