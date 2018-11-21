import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'


const typeDefs = `
  type Genre {
    id: ID
    name: String
  }
  type ProductionCompanies {
    id: ID
    logo_path: String
    name: String
    origin_country: String
  }
  type ProductionCountries {
    iso_3166_1: ID
    name: String
  }
  type SpokenLanguages {
    iso_639_1: ID
    name: String
  }
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
  type Query {
    watchlist: [Int]
    movieByID(movieID: Int): Movie
    moviesByTitle(title: String): [MovieSearchResult]
  }
`

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
