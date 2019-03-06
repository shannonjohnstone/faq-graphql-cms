import { gql } from 'apollo-server'

export default gql`
  type Query {
    homepage: HomePage!
    faqs: [Faq]!
  }

  type HomePage {
    heading: String!
    subheading: String!
    heroImageUrl: String!
  }

  type Faq {
    title: String!
    body: String!
  }
`
