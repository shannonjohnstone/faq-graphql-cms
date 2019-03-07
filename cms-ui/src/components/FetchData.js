import React, { useEffect } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SET_LOADING = gql`
  mutation SetLoading($state: String!) {
    setLoading(state: $state) @client
  }
`

const CallMutation = props => {
  useEffect(() => {
    props.mutation()
  }, [props.watcher])

  return props.children
}

const FetchData = props => {
  return (
    <Query query={props.query}>
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
