import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import { tokenState } from '../state'
import OrderItem from './OrderItem'

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
        console.log('mypage: ', res)
        setCurrentPage(res.data.currentPage)
        setTotalPages(res.data.totalPages)
        setContent(res.data.content)
      })
      .catch((err) => console.log(err))
  }, [currentPage, token])

  return (
    <div>
      {content.map((item) => {
        return <OrderItem item={item} />
      })}
    </div>
  )
}

export default ItemList
