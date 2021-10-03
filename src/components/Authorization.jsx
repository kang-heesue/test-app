import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { loginState, tokenState } from '../state'

function Authorization() {
  const [isLogin, setIsLogin] = useRecoilState(loginState)
  const [token, setToken] = useRecoilState(tokenState)

  useEffect(() => {
    localStorage.setItem('is-Login', JSON.stringify(isLogin))
  }, [isLogin])

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token))
  }, [token])

  useEffect(() => {
    const localLoginState = localStorage.getItem('is-Login')
    const localToken = localStorage.getItem('token')
    if (localLoginState) {
      setIsLogin(JSON.parse(localLoginState))
    }
    if (localToken) {
      setToken(JSON.parse(localToken))
    }
  }, [setIsLogin, setToken])

  return null
}

export default Authorization
