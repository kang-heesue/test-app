import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import { loginState, tokenState } from '../state'
import '../styles/Login.css'

function Login() {
  const history = useHistory()
  const [isLogin, setIsLogin] = useRecoilState(loginState)
  const [token, setToken] = useRecoilState(tokenState)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (token) => {
    setToken(token)
    if (token) {
      setIsLogin(true)
    }
  }

  const handleLoginRequest = (e) => {
    e.preventDefault()
    if (email && password) {
      axios
        .post(
          '/login',
          { email: email, password: password },
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: token,
            },
          },
        )
        .then((res) => {
          handleLogin(res.data.token)
          localStorage.setItem('token', res.data.token)
          history.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      alert('비밀번호를 확인해 주세요.')
    }
  }

  return (
    <div id="login_container">
      <form onSubmit={handleLoginRequest}>
        <Label for="email" value="이메일" />
        <Input
          type="email"
          required
          id="email"
          onChange={setEmail}
          value={email}
        />
        <Label for="password" value="비밀번호" />
        <Input
          type="password"
          required
          id="password"
          onChange={setPassword}
          value={password}
        />
        <Button value="로그인" type="submit" />
      </form>
    </div>
  )
}

export default Login
