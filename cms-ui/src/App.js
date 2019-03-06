import React, { Fragment, Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './containers/Home'
import Faqs from './containers/Faqs'

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
          <Router>
            <Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/faqs" exact component={Faqs} />
            </Fragment>
          </Router>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
