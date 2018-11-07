const { makeExecutableSchema } = require("graphql-tools")

const { resolvers } = require("./resolvers")

const typeDefs = `
  type Movie {
    original_title: String
  }
  type Query {
    watchlist: [Int],
    movieByID(movieID: Int): Movie
  }
`

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
