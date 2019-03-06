/* eslint no-console: 0 */
import { start, config } from './config/server'
import graphqlServer from './config/graphqlServer'

const app = start()
const server = graphqlServer()

server.applyMiddleware({ app, path: config.ENDPOINT })

app.listen({ port: config.PORT }, () =>
  console.log(`Server start: ${config.URL}${config.PORT}${server.graphqlPath}`),
)
