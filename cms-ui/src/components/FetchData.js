import React, { useEffect } from 'react'
import { Query, Mutation } from '../graphqlClient'
import { SET_LOADING } from '../graphqlClient/mutations'

const CallMutation = props => {
  useEffect(() => {
    props.mutation()
  }, [props.watcher])

  return props.children
}

const FetchData = props => {
  return (
    <Query {...props}>
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
