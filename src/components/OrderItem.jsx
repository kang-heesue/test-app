import React from 'react'
import PropTypes from 'prop-types'

function OrderItem(props) {
  console.log(props)
  return (
    <div>
      <div>{props.item.id}</div>
      <div>{props.item.itemName}</div>
    </div>
  )
}

OrderItem.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
}

export default OrderItem
