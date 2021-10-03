import React from 'react'
import PropTypes from 'prop-types'
import '../styles/OrderItem.css'

function OrderItem(props) {
  console.log(props)
  return (
    <div className={props.className}>
      <div className="item-id">{props.item.id}</div>
      <div className="item-name">{props.item.itemName}</div>
    </div>
  )
}

OrderItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default OrderItem
