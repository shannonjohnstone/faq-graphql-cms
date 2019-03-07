import React from 'react'
import FetchData from '../components/FetchData'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const HOME_QUERY = gql`
  {
    homepage {
      heading
      subheading
      heroImageUrl
    }
  }
`

const Home = () => {
  return (
    <FetchData
      query={HOME_QUERY}
      render={({ homepage = {} }) => {
        return (
          <div>
            <h1>{homepage.heading}</h1>
            <h1>{homepage.subheading}</h1>
            <img src={homepage.heroImageUrl} alt={homepage.subheading} />
            <Link to="/faqs">Learn more</Link>
          </div>
        )
      }}
    />
  )
}

export default Home
