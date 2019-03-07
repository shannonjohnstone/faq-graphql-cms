import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import FetchData from '../../components/FetchData'
import { Link } from 'react-router-dom'

import { HOME_QUERY } from '../../graphqlClient/queries'

const HomeContainer = () => {
  const [backgroundUrl, setBackgroundUrl] = useState('')
  const [sectionStyles, setSectionStyles] = useState({})

  useEffect(() => {
    setSectionStyles({
      background: `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.20) 100%), url(${backgroundUrl}) no-repeat`,
    })
  }, [backgroundUrl])

  const updateStyles = data => {
    setBackgroundUrl(data.homepage.heroImageUrl)
  }

  return (
    <FetchData
      query={HOME_QUERY}
      onCompleted={updateStyles}
      render={({ homepage }) => (
        <section className="home page-section" style={sectionStyles}>
          <Container>
            <h1 className="text-color-white">{homepage && homepage.heading}</h1>
            <h2 className="text-color-white">
              {homepage && homepage.subheading}
            </h2>
            {homepage && (
              <Link to="/faqs" className="text-color-white text-underline">
                Learn More
              </Link>
            )}
          </Container>
        </section>
      )}
    />
  )
}

export default HomeContainer
