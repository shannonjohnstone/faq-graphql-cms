import gql from 'graphql-tag'

export const LOADING_QUERY = gql`
  {
    isLoading @client
  }
`
export const HOME_QUERY = gql`
  {
    homepage {
      heading
      subheading
      heroImageUrl
    }
  }
`
export const FAQS_QUERY = gql`
  {
    isLoading @client
    faqs {
      title
      body
    }
  }
`
