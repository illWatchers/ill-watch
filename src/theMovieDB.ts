import { RESTDataSource } from 'apollo-datasource-rest'

const getApiKey = (): string => {
  try {
    // try to get key from env
    const key = process.env.THE_MOVIE_DB_API_KEY
    if (!key) { throw new Error() }
    return key
  } catch (e) {
    const themoviedbConfig = require('../config/private.json')
    // get key from local config
    const movieDbConfig: any = themoviedbConfig.themoviedb
    return movieDbConfig.api_key
  }
}

export class TheMovieDB extends RESTDataSource {
  apiKey: string = ''

  constructor() {
    super()
    this.baseURL = "https://api.themoviedb.org/3/"
    this.apiKey = getApiKey()
  }

  async getMovieByID(movieId: number) {
    const data = await this.get(`movie/${movieId}?api_key=${this.apiKey}`)
    return data
  }
}
