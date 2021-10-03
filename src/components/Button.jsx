import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return <button onClick={props.onClick}>{props.value}</button>
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}

export default Button
