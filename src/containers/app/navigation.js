import React from 'react'
import PropTypes from 'prop-types'
import cx from 'bem-classes'
import { Link } from 'react-router-dom'
import 'styles/blocks/navigation.css'

const Navigation = (props) => {
  const navigation = cx('navigation', props.className)

  return (
    <nav className={navigation}>
      <Link to="/" className={navigation.e('link')}>Home</Link>
      <Link to="/about-us" className={navigation.e('link')}>About</Link>
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
