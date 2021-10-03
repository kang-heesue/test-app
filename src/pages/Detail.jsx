import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import { tokenState } from '../state'
import '../styles/Detail.css'

function Detail() {
  const token = useRecoilValue(tokenState)
  const [id, setId] = useState(0)
  const [itemName, setItemName] = useState('')

  useEffect(() => {
    if (!token) return
    axios
      .get(`/order/${id}`, {
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setId(res.data.id)
        setItemName(res.data.itemName)
      })
      .catch((err) => console.log(err))
  }, [id, token])

  return (
    <div id="detail_container">
      <div id="detail_id">{id}</div>
      <div>{itemName}</div>
    </div>
  )
}

export default Detail
