const { RESTDataSource } = require('apollo-datasource-rest')

let API_KEY
try {
  API_KEY = require('../config/private.json').themoviedb.api_key
} catch (e) {
  API_KEY = process.env.THE_MOVIE_DB_API_KEY
}


class TheMovieDB extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.themoviedb.org/3/"
    this.apiKey = API_KEY
  }

  async getMovieByID(movieId) {
    const data = await this.get(`movie/${movieId}?api_key=${this.apiKey}`)
    return data
  }

}

exports.TheMovieDB = TheMovieDB
