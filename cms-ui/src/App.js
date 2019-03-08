import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { GraphQLClient, Query } from './graphqlClient'
import Loader from './components/Loader'
import Home from './containers/Home/HomeContainer'
import Faqs from './containers/Faqs/FaqsContainer'
import ErrorBoundary from './components/ErrorBoundary'

import { LOADING_QUERY } from './graphqlClient/queries'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <GraphQLClient>
          <main className="main">
            <Query query={LOADING_QUERY}>
              {({ loading, error, data }) => {
                // NOTE: general error catching for this test, not a real world solution
                if (error) throw new Error()
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
      </ErrorBoundary>
    )
  }
}

export default App
