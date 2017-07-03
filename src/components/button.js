import React from 'react'
import PropTypes from 'prop-types'
import bem from 'bem-classes'
import 'styles/blocks/button.css'

const Button = (props) => {
  const { className, onClick, block } = props
  const button = bem('button', { $block: block }, className)
  return (
    <button onClick={onClick} className={button}>{ props.children }</button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  block: PropTypes.bool,
}

Button.defaultProps = {
  className: {},
  onClick: () => {},
  block: false,
}

export default Button
