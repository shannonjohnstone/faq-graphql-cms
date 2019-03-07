import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const FaqsTitleMenu = ({ faqs = [], handleOnClick, selectedId = '1' }) => (
  <nav>
    {faqs.length
      ? faqs.map(faq => (
          <Button
            variant="link"
            className={
              faq.id === selectedId
                ? 'faq-menu-item active disabled'
                : 'faq-menu-item'
            }
            key={faq.id}
            onClick={() => handleOnClick(faq.id)}
          >
            {faq.title}
          </Button>
        ))
      : null}
  </nav>
)

FaqsTitleMenu.propTypes = {
  faqs: PropTypes.array,
  handleOnClick: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
}

export default FaqsTitleMenu
