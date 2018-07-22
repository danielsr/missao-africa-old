import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ text, color, onClick, submit }) => (
  <button type={submit ? 'submit' : 'button'} className={`btn ${color}`} onClick={onClick}>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  submit: PropTypes.bool
}

Button.defaultProps = {
  color: 'primary'
}

export default Button
