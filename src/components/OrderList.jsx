import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import { tokenState } from '../state'
import OrderItem from './OrderItem'
import Pagination from './Pagination'
import '../styles/OrderList.css'

function ItemList() {
  const token = useRecoilValue(tokenState)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [content, setContent] = useState([])

  useEffect(() => {
    if (!token) return
    axios
      .get(`/order?page=${currentPage}`, {
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setCurrentPage(res.data.currentPage)
        setTotalPages(res.data.totalPages)
        setContent(res.data.content)
      })
      .catch((err) => console.log(err))
  }, [currentPage, token])

  const pageNum = []
  for (let i = 0; i < totalPages; i++) {
    pageNum.push(i)
  }

  return (
    <div className="order-list">
      <div>
        {content.map((item) => {
          return <OrderItem item={item} />
        })}
      </div>
      <div id="order-page">
        {pageNum.map((page) => {
          return (
            <Pagination
              page={page}
              currentPage={currentPage}
              paginate={setCurrentPage}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ItemList
