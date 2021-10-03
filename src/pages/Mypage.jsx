import React, { useState } from 'react'
import OrderList from '../components/OrderList'
import Pagination from '../components/Pagination'

function Mypage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [content, setContent] = useState([])

  return (
    <div>
      <OrderList />
      <Pagination totalPages={totalPages} />
    </div>
  )
}

export default Mypage
