import React from 'react'
import { Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'

const FaqsTitleMenu = ({ faqs = [], handleOnClick, selectedIndex = 0 }) => (
  <Nav variant="tabs">
    {faqs.length
      ? faqs.map((faq, i) => (
          <Nav.Link
            className={selectedIndex === i ? 'active' : ''}
            key={faq.title}
            onClick={() => handleOnClick(i)}
          >
            {faq.title}
          </Nav.Link>
        ))
      : null}
  </Nav>
)

FaqsTitleMenu.propTypes = {
  faqs: PropTypes.array,
  handleOnClick: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
}

export default FaqsTitleMenu
