import React from 'react'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import '../styles/OrderItem.css'

function OrderItem(props) {
  const history = useHistory()

  const handleClickItem = () => {
    history.push(`/mypage/order/${props.item.id}`)
  }

  return (
    <div className="item" onClick={handleClickItem}>
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
