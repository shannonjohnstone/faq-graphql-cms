import gql from 'graphql-tag'

/**
 * graphql mutations
 */

export const SET_LOADING = gql`
  mutation SetLoading($state: String!) {
    setLoading(state: $state) @client
  }
`
