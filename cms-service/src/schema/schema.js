import { gql } from 'apollo-server-express'

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
    id: ID!
    title: String!
    body: String!
  }
`
