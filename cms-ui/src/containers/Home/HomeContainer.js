import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import FetchData from '../../components/FetchData'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import './Home.css'

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
  const [backgroundUrl, setBackgroundUrl] = useState('')
  const [sectionStyles, setSectionStyles] = useState({})

  useEffect(() => {
    setSectionStyles({
      background: `url(${backgroundUrl}) no-repeat`,
    })
  }, [backgroundUrl])

  const updateStyles = data => {
    setBackgroundUrl(data.homepage.heroImageUrl)
  }

  return (
    <FetchData
      query={HOME_QUERY}
      onCompleted={updateStyles}
      render={({ homepage = {} }) => {
        return (
          <section className="home page-section" style={sectionStyles}>
            <Container>
              <h1>{homepage.heading}</h1>
              <h2>{homepage.subheading}</h2>
              {homepage.heading && <Link to="/faqs">Learn more</Link>}
            </Container>
          </section>
        )
      }}
    />
  )
}

export default Home
