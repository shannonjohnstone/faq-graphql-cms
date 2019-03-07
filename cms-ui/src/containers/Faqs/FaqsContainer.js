import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FetchData from '../../components/FetchData'
import FaqsTitleMenu from './FaqsTitleMenu'
import FaqDetail from './FaqDetail'

import { FAQS_QUERY } from '../../graphqlClient/queries'

const Faqs = () => {
  const [selectedIndex, setSelectedFaqs] = useState(0)
  return (
    <FetchData
      query={FAQS_QUERY}
      render={({ faqs = [] }) => {
        return (
          <Container className="page-section">
            <h1>FAQS</h1>
            <Row>
              <Col lg={{ span: 8 }}>
                <FaqDetail faqs={faqs} selectedIndex={selectedIndex} />
              </Col>
              <Col lg={{ span: 3 }}>
                <FaqsTitleMenu
                  faqs={faqs}
                  selectedIndex={selectedIndex}
                  handleOnClick={setSelectedFaqs}
                />
              </Col>
            </Row>
          </Container>
        )
      }}
    />
  )
}

Faqs.defaultProps = {
  faqs: [],
}

export default Faqs
