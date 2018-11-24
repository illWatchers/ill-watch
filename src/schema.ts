import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'
import { query } from './schema/Query'
import { mutation } from './schema/Mutation'

const typeDefs = [
  query, 
  mutation
]

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
