import { ApolloServer } from 'apollo-server-express'
import typeDefs from '../schema/schema.js'
import resolvers from '../resolver'
import database from '../database'
import dataRepository from '../repository'

export default () =>
  new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      repository: dataRepository(database),
    },
  })
