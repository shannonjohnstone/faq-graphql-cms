import React from 'react'
import PropTypes from 'prop-types'
import { Query, Mutation } from '../graphqlClient'
import { SET_LOADING } from '../graphqlClient/mutations'
import CallMutation from '../components/CallMutation'

/**
 * FetchData
 * render props component for managing data fetching
 * and isLoading state
 */
const FetchData = props => {
  return (
    <Query {...props} data-testid="fetchData">
      {({ loading, error, data }) => {
        // NOTE: general error catching for this test, not a real world solution
        if (error) throw new Error()
        return (
          <Mutation mutation={SET_LOADING}>
            {setLoading => {
              return (
                <CallMutation
                  mutation={() => setLoading({ variables: { state: loading } })}
                  watcher={loading}
                >
                  {data ? props.render(data) : null}
                </CallMutation>
              )
            }}
          </Mutation>
        )
      }}
    </Query>
  )
}

FetchData.propTypes = {
  query: PropTypes.object.isRequired,
}

export default FetchData
