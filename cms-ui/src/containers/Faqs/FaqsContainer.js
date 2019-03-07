import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import FetchData from '../../components/FetchData'
import FaqsTitleMenu from './FaqsTitleMenu'
import FaqDetail from './FaqDetail'

import { FAQS_QUERY } from '../../graphqlClient/queries'

const Faqs = () => {
  const [selectedId, setSelectedFaqs] = useState('1')
  return (
    <FetchData
      query={FAQS_QUERY}
      render={({ faqs }) => {
        return (
          <Container className="page-section">
            <Link to="/">&lt; Back</Link>
            <h1>FAQS</h1>
            <Row>
              <Col lg={{ span: 3, order: 12 }}>
                <FaqsTitleMenu
                  faqs={faqs}
                  selectedId={selectedId}
                  handleOnClick={setSelectedFaqs}
                />
              </Col>
              <Col lg={{ span: 8 }}>
                <FaqDetail faqs={faqs} selectedId={selectedId} />
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
