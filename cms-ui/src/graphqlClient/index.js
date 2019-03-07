import React from 'react'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

const typeDefs = gql`
  extend type Query {
    isLoading: Boolean!
  }
`

const cache = new InMemoryCache()
cache.writeData({
  data: {
    isLoading: false,
  },
})

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  typeDefs,
  cache,
  resolvers: {
    Mutation: {
      setLoading: (_root, variables, { cache, getCacheKey }) => {
        const isLoading = variables.state
        const data = { isLoading, __typename: 'Loading' }
        cache.writeData({ data })
        return null
      },
    },
  },
})

const GraphQLClient = props => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

export { GraphQLClient, Query, Mutation }
