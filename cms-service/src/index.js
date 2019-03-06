import { ApolloServer } from 'apollo-server'
import typeDefs from './schema/schema.js'
import resolvers from './resolver'

import database from './database'
import dataRepository from './repository'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    repository: dataRepository(database),
  },
})

server.listen().then(({ url }) => console.log(`Server start: ${url}`)) // eslint-disable-line
