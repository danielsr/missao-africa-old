import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ text, linkTo, className }) => (
  <Link to={linkTo}>
    <button type="button" className={className}>{text}</button>
  </Link>
)

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  linkTo: PropTypes.string
}

export default LinkButton
