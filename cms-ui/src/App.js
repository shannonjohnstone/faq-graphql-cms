import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import DummyQuery from './DummyQuery'

import './App.css'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header" />
          <p>This is the app</p>
          <DummyQuery />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
