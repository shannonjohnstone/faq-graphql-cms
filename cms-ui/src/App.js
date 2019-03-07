import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { GraphQLClient, Query } from './graphqlClient'
import Loader from './components/Loader'
import Home from './containers/Home/HomeContainer'
import Faqs from './containers/Faqs/FaqsContainer'

import { LOADING_QUERY } from './graphqlClient/queries'

import './App.css'

class App extends Component {
  render() {
    return (
      <GraphQLClient>
        <main className="App">
          <Query query={LOADING_QUERY}>
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
        </main>
      </GraphQLClient>
    )
  }
}

export default App
