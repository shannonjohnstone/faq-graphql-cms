import { ApolloServer } from 'apollo-server-express'
import typeDefs from '../schema/schema.js'
import resolvers from '../resolver'
import database from '../database'
import dataRepository from '../repository'
import faqsService from '../service/faqsService'

const repository = dataRepository(database)
export default () =>
  new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      repository,
      faqsService,
    },
  })
