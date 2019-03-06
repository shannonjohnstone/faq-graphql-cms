import { ApolloServer } from 'apollo-server'
import typeDefs from './schema/schema.js'
import Query from './resolver/Users'

const resolvers = {
  Query,
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server start: ${url}`))
