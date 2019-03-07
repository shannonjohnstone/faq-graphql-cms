import React, { Fragment, Component } from 'react'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Query } from 'react-apollo'

import Loader from './components/Loader'
import Home from './containers/Home'
import Faqs from './containers/Faqs'

import './App.css'

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

const INIT_QUERY = gql`
  {
    isLoading @client
  }
`

const client = new ApolloClient({
  // connectToDevTools: true,
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

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header" />
          <p>This is the app</p>
          <Query query={INIT_QUERY}>
            {({ loading, error, data }) => {
              return (
                <React.Fragment>
                  <Loader isLoading={data.isLoading} />
                  <Router>
                    <Fragment>
                      <Route path="/" exact component={Home} />
                      <Route path="/faqs" exact component={Faqs} />
                    </Fragment>
                  </Router>
                </React.Fragment>
              )
            }}
          </Query>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
