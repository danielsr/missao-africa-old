import PropTypes from 'prop-types'
import React from 'react'

const Toast = ({ msg }) => <div className="toast">{msg}</div>

Toast.propTypes = {
  msg: PropTypes.string
}

export default Toast
