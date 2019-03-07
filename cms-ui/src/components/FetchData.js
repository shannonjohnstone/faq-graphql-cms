import React from 'react'
import { Query, Mutation } from '../graphqlClient'
import { SET_LOADING } from '../graphqlClient/mutations'
import CallMutation from '../components/CallMutation'

const FetchData = props => {
  return (
    <Query {...props} data-testid="fetchData">
      {({ loading, error, data }) => (
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
      )}
    </Query>
  )
}

export default FetchData
