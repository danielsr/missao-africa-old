import React from 'react'
import PropTypes from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

const Form = ({ onSubmit, validate, children }) => (
  <FinalForm
    onSubmit={onSubmit}
    validate={validate}
    render={form => (
      <form onSubmit={form.handleSubmit}>
        {typeof children === 'function' ? children(form) : children}
      </form>
    )}
  />
)

Form.propTypes = {
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
  children: PropTypes.any
}

export default Form
