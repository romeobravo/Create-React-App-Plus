import React from 'react'
import PropTypes from 'prop-types'
import bem from 'bem-classes'
import { Link } from 'react-router-dom'
import 'styles/blocks/navigation.css'

const Navigation = (props) => {
  const navigation = bem('navigation', props.className)

  return (
    <nav className={navigation}>
      <Link to="/" className={navigation('link')}>Home</Link>
      <Link to="/about-us" className={navigation('link')}>About</Link>
    </nav>
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
}

Navigation.defaultProps = {
  className: '',
}

export default Navigation
