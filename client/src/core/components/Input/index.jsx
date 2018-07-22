import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

const Input = ({ name, title, placeholder, type }) => (
  <Field name={name}>
    {({ input, meta }) => (
      <div className="form-control">
        <label>{title}</label>
        <input type={type} {...input} placeholder={placeholder} />
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    )}
  </Field>
)

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default Input
