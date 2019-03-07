import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import FetchData from '../../components/FetchData'
import { Link } from 'react-router-dom'
import './Home.css'

import { HOME_QUERY } from '../../graphqlClient/queries'

const Home = () => {
  const [backgroundUrl, setBackgroundUrl] = useState('')
  const [sectionStyles, setSectionStyles] = useState({})

  useEffect(() => {
    setSectionStyles({
      // background: `url(${backgroundUrl}) no-repeat linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1))`,
      background: `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.40) 100%), url(${backgroundUrl}) no-repeat`,
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
              <h1 className="white">{homepage.heading}</h1>
              <h2 className="white">{homepage.subheading}</h2>
              {homepage.heading && <Link to="/faqs">Learn more</Link>}
            </Container>
          </section>
        )
      }}
    />
  )
}

export default Home
