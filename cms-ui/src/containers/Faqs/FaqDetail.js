import React from 'react'
import PropTypes from 'prop-types'

const FaqsDetail = ({ faqs, selectedIndex }) =>
  faqs.length
    ? faqs
        .filter((item, index) => index === selectedIndex)
        .map(faq => (
          <section key={faq.title}>
            <h2>{faq.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: faq.body }} />
          </section>
        ))
    : null

FaqsDetail.propTypes = {
  faqs: PropTypes.array,
  selectedIndex: PropTypes.number,
}

export default FaqsDetail
