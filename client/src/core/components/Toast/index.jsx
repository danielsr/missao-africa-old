import PropTypes from 'prop-types'
import React from 'react'

export const Toast = ({ msg }) => <div className="toast">{msg}</div>

Toast.propTypes = {
  msg: PropTypes.string
}
