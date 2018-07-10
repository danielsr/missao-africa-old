import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ text, color, onClick }) => (
  <button type="submit" className={`btn ${color}`} onClick={() => onClick()}>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'primary'
}

export default Button
