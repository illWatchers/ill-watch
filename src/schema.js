const { makeExecutableSchema } = require("graphql-tools")

const resolvers = require("./resolvers")

const schema = `
  type Query {
    watchlist: [Int]
  }
`

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
