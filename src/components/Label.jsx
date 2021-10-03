import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Label.css'

function Label(props) {
  return <label htmlFor={props.for}>{props.value}</label>
}

Label.propTypes = {
  for: PropTypes.string,
  value: PropTypes.string,
}

export default Label
