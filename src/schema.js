const { makeExecutableSchema } = require("graphql-tools")

const { resolvers } = require("./resolvers")

const schema = `
  type Movie {
    original_title: String
  }
  type Query {
    watchlist: [Int],
    movieByID(movieID: Int): Movie
  }
`

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
