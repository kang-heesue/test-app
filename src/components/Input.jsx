import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Input.css'

function Input(props) {
  const handleChange = (e) => {
    props.onChange(e.target.value)
    props.validator && props.validator(e.target.value)

    const inputError = document.getElementById(`${props.id}`)
    if (error) {
      inputError.classList.add('input-error')
    } else {
      inputError.classList.remove('input-error')
    }
  }

  const error =
    props.error && props.id in props.error ? props.error[props.id] : null

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
  error: PropTypes.object,
}

export default Input
