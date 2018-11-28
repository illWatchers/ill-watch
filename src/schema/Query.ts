import {
  movie,
  movieSearchResult
} from './types/movie'

const queries = `
  type Query {
    watchlist: [Int]
    movieByID(movieID: Int): Movie
    moviesByTitle(title: String): [MovieSearchResult]
  }
`

export const query = () => [
  queries,
  movie,
  movieSearchResult
]
