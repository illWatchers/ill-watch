import { productionCompanies } from './productionCompanies'
import { productionCountries } from './productionCountries'
import { spokenLanguages } from './spokenLanguage'
import { genre } from './genre'
import { credits } from './credits'

const basicMovieTypes = `
  adult: Boolean
  backdrop_path: String
  genre_ids: [Int]
  id: ID
  original_language: String
  original_title: String
  overview: String
  popularity: Float
  poster_path: String
  release_date: String
  title: String
  video: Boolean
  vote_average: Float
  vote_count: Int
`

const movieSearchResultType = `
  type MovieSearchResult {
    ${basicMovieTypes}
  }
`

const movieType = `
  type Movie {
    ${basicMovieTypes}
    budget: Int
    genres: [Genre]
    homepage: String
    imdb_id: String
    production_companies: [ProductionCompanies]
    production_countries: [ProductionCountries]
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguages]
    status: String
    tagline: String
    credits: Credits
  }
`

export const movie = () => [
  movieType,
  productionCompanies,
  productionCountries,
  spokenLanguages,
  genre,
  credits
]

export const movieSearchResult = () => [
  movieSearchResultType,
  productionCompanies,
  productionCountries,
  spokenLanguages,
  genre
]
