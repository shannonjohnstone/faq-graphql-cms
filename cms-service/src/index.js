import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema/schema.js'
import resolvers from './resolver'

const PORT = 4000
const app = express()

import database from './database'
import dataRepository from './repository'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    repository: dataRepository(database),
  },
})

server.applyMiddleware({ app, path: '/content' })
app.listen({ port: PORT }, () => console.log(`Server start: http://localhost:${PORT}${server.graphqlPath}`)) // eslint-disable-line
