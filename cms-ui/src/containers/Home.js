import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ match }) => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/faqs">Learn more</Link>
    </div>
  )
}

export default Home
