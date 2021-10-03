import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Button.css'

function Button(props) {
  return <button type={props.type}>{props.value}</button>
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
}

export default Button
