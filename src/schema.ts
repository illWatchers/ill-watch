import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'
import { query } from './schema/Query'

const typeDefs = [query]

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
