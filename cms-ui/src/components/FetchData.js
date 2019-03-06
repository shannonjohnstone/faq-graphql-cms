import React from 'react'
import { Query } from 'react-apollo'

const FetchData = props => (
  <Query query={props.query}>
    {({ loading, error, data }) =>
      loading ? 'Loading...' : props.render({ data })
    }
  </Query>
)

export default FetchData
