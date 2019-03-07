import React from 'react'
import { bool } from 'prop-types'
import './Loader.css'

/**
 * Loader component
 */
const Loader = ({ isLoading = false }) => {
  return isLoading ? <div className="loader" data-testid="loader" /> : null
}

Loader.propTypes = {
  isLoading: bool,
}

export default Loader
