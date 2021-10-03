import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <input
      type={props.type}
      required={props.required}
      id={props.id}
      onChange={handleChange}
      value={props.value}
    />
  )
}

Input.propTypes = {
  validator: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Input
