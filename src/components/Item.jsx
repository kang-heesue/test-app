import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import { tokenState } from '../state'

function Item() {
  const token = useRecoilValue(tokenState)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [content, setContent] = useState([])

  useEffect(() => {
    axios
      .get(`https://mycroft-test-api.herokuapp.com/order?page=${currentPage}`, {
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
        return (
          <>
            <div>{item.id}</div>
            <div>{item.itemName}</div>
          </>
        )
      })}
    </div>
  )
}

export default Item
