import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { loginState } from '../state'
import logo from '../images/logo.svg'
import '../styles/Header.css'

function Header() {
  const history = useHistory()
  const isLogin = useRecoilValue(loginState)

  const clickServiceBtn = () => {
    history.push('/')
  }

  const clickSignUpBtn = () => {
    history.push('/sign-up')
  }

  const clickLoginBtn = () => {
    history.push('/login')
  }

  const clickLogoutBtn = () => {
    history.push('/logout')
  }

  const clickMypageBtn = () => {
    history.push('/mypage/order')
  }

  return (
    <div id="header_container">
      <img id="header_logo" src={logo} alt="headerImage" />
      <div id="header_menu">
        <button className="header_btn" onClick={clickServiceBtn}>
          서비스
        </button>
        {isLogin ? (
          <>
            <button className="header_btn" onClick={clickMypageBtn}>
              마이페이지
            </button>
            <button className="header_btn" onClick={clickLogoutBtn}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button className="header_btn" onClick={clickSignUpBtn}>
              회원가입
            </button>
            <button className="header_btn" onClick={clickLoginBtn}>
              로그인
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
