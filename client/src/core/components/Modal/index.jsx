import PropTypes from 'prop-types'
import React from 'react'

const sizes = {
  small: { width: 400, height: 300 },
  medium: { width: 600, height: 500 },
  large: { width: 1140, height: 700 },
}

const Modal = ({ title, children, size }) => (
  <div className="modal-background">
    <div className="modal" style={sizes[size]}>
      <div className="modal-body">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  size: PropTypes.string
}

export default Modal
