import React from 'react'
import FetchData from '../components/FetchData'
import gql from 'graphql-tag'

const FAQS_QUERY = gql`
  {
    isLoading @client
    faqs {
      title
      body
    }
  }
`

const Faqs = () => {
  return (
    <FetchData
      query={FAQS_QUERY}
      render={({ faqs = [] }) => {
        return faqs.length
          ? faqs.map(faq => (
              <div key={faq.title}>
                <h3>{faq.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: faq.body }} />
              </div>
            ))
          : null
      }}
    />
  )
}

Faqs.defaultProps = {
  faqs: [],
}

export default Faqs
