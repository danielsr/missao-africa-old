import React from 'react'
import PropTypes from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

const Form = ({ onSubmit, validate, children }) => (
  <FinalForm
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    )}
  />
)

Form.propTypes = {
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
  children: PropTypes.node
}

export default Form
