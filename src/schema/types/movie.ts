import { productionCompanies } from './productionCompanies'
import { productionCountries } from './productionCountries'
import { spokenLanguages } from './spokenLanguage'
import { genre } from './genre'

const movieSearchResultType = `
  type MovieSearchResult {
    poster_path: String
    adult: Boolean
    overview: String
    release_date: String
    genre_ids: [Int]
    id: ID
    original_title: String
    original_language: String
    title: String
    backdrop_path: String
    popularity: Float
    vote_count: Int
    video: Boolean
    vote_average: Float
  }
`

const movieType = `
  type Movie {
    adult: Boolean
    backdrop_path: String
    # belongs_to_collection: null
    budget: Int
    genres: [Genre]
    homepage: String
    id: ID
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [ProductionCompanies]
    production_countries: [ProductionCountries]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguages]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }
`

export const movie = () => [
  movieType,
  productionCompanies,
  productionCountries,
  spokenLanguages,
  genre
]

export const movieSearchResult = () => [
  movieSearchResultType,
  productionCompanies,
  productionCountries,
  spokenLanguages,
  genre
]
