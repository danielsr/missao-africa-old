import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ModalStrap, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Button from '../Button'

const Modal = (props) => {
  const {
    isOpen, title, children, onConfirm, onCancel, confirmText, cancelText
  } = props
  return (
    <ModalStrap isOpen={isOpen}>
      <ModalHeader>
        {title}
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" text={confirmText} onClick={onConfirm} />
        {' '}
        <Button color="secondary" text={cancelText} onClick={onCancel} />
      </ModalFooter>
    </ModalStrap>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func
}

Modal.defaultProps = {
  isOpen: true,
  confirmText: 'Ok',
  cancelText: 'Cancel'
}

export default Modal
