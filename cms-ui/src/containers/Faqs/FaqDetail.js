import React from 'react'
import PropTypes from 'prop-types'

const FaqsDetail = ({ faqs = [], selectedId = '1' }) =>
  faqs.length
    ? faqs
        .filter(item => item.id === selectedId)
        .map(faq => (
          <section key={faq.id}>
            <h2>{faq.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: faq.body }} />
          </section>
        ))
    : null

FaqsDetail.propTypes = {
  faqs: PropTypes.array,
  selectedId: PropTypes.string,
}

export default FaqsDetail
