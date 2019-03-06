import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const TEST_QUERY = gql`
  {
    homepage {
      heading
    }
    faqs {
      title
      body
    }
  }
`

const DummyQuery = () => (
  <Query query={TEST_QUERY}>
    {({ loading, error, data }) => {
      {console.log(loading, data)} // eslint-disable-line
      return <p>Dummy Query</p>
    }}
  </Query>
)

export default DummyQuery
