import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import { tokenState } from '../state'
import '../styles/Login.css'

function Login() {
  const history = useHistory()
  const token = useRecoilValue(tokenState)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginRequest = () => {
    if (email & password) {
      axios
        .post(
          'https://mycroft-test-api.herokuapp.com/login',
          { email: email, password: password },
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: token,
            },
          },
        )
        .then((res) => {
          history.push('/')
        })
        .catch((err) => console.log(err))
    } else if (password.length < 8) {
    } else {
      alert('비밀번호를 확인해 주세요.')
    }
  }

  return (
    <div id="login_container">
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
      <Button value="로그인" onClick={handleLoginRequest} />
    </div>
  )
}

export default Login
