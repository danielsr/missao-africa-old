import PropTypes from 'prop-types'
import React from 'react'
import { Button as ButtonStrap } from 'reactstrap'

const Button = (props) => {
  const { text, color, onClick } = props
  return (
    <ButtonStrap color={color} onClick={() => onClick()}>
      {text}
    </ButtonStrap>
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
