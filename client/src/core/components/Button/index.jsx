import PropTypes from 'prop-types'
import React from 'react'

const Button = (props) => {
  const { text, color, onClick } = props
  return (
    <button type="submit" className={`btn ${color}`} onClick={() => onClick()}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'primary'
}

export { Button }
