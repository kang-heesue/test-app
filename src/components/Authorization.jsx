import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { loginState, tokenState } from '../state'

function Authorization() {
  const [isLogin, setIsLogin] = useRecoilState(loginState)
  const [token, setToken] = useRecoilState(tokenState)

  console.log('is-Login: ', isLogin)
  console.log('accessToken: ', token)

  const handleLogin = (token) => {
    setToken(token)
    if (token) {
      setIsLogin(true)
    }
  }

  useEffect(() => {
    localStorage.setItem('is-Login', JSON.stringify(isLogin))
  }, [isLogin])

  useEffect(() => {
    const data = localStorage.getItem('is-Login')
    if (data) {
      setIsLogin(JSON.parse(data))
    }
  }, [setIsLogin])

  useEffect(() => {
    localStorage.setItem('accessToken', JSON.stringify(token))
  }, [token])

  useEffect(() => {
    const data = localStorage.getItem('accessToken')
    if (data) {
      setToken(JSON.parse(data))
    }
  }, [setToken])

  return (
    <div>
      <div></div>
    </div>
  )
}

export default Authorization
