import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { tokenState } from '../state'
import cake from '../images/cake.jpeg'
import '../styles/Service.css'

function Service() {
  const history = useHistory()
  const token = useRecoilValue(tokenState)

  const clickOrderBtn = () => {
    if (token) {
      alert('주문 성공!')
    } else {
      alert('로그인하세요.')
      history.push('/sign-up')
    }
  }

  return (
    <div id="service_container">
      <img className="service_image" src={cake} alt="serviceImage" />
      <button className="service_order" onClick={clickOrderBtn}>
        주문하기
      </button>
    </div>
  )
}

export default Service
