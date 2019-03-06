import { gql } from 'apollo-server'

export default gql`
  type Query {
    home: Home!
    faqs: [Faq]!
  }

  type Home {
    heading: String!
    subheading: String!
    heroImageUrl: String!
  }

  type Faq {
    title: String!
    body: String!
  }
`
