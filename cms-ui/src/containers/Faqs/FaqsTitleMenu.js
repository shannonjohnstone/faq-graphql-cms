import React from 'react'
import { Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'

const FaqsTitleMenu = ({ faqs = [], handleOnClick, selectedIndex = '1' }) => (
  <Nav variant="tabs">
    {faqs.length
      ? faqs.map(faq => (
          <Nav.Link
            className={faq.id === selectedIndex ? 'active' : ''}
            key={faq.id}
            onClick={() => handleOnClick(faq.id)}
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
  selectedIndex: PropTypes.string,
}

export default FaqsTitleMenu
