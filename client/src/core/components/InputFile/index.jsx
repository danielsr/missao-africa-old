import React from 'react'
import PropTypes from 'prop-types'

const InputFile = ({ onChange, className }) => (
  <div className="form-control">
    <input type="file" onChange={onChange} className={className} />
  </div>
)

InputFile.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
}

export default InputFile
