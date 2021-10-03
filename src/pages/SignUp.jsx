import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import { tokenState } from '../state'
import '../styles/SignUp.css'

function SignUp() {
  const history = useHistory()
  const token = useRecoilValue(tokenState)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState({})

  const validateEmail = (email) => {
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if (!reg.test(email)) {
      setError((prev) => ({ ...prev, email: '이메일을 확인해주세요.' }))
      return false
    }
    return true
  }

  const validatePassword = (password) => {
    if (password.length < 8 || password.length > 15) {
      setError((prev) => ({ ...prev, password: '비밀번호를 확인해주세요.' }))
      return false
    }
    return true
  }

  const validatePasswordCheck = (password, passwordCheck) => {
    if (password !== passwordCheck) {
      return false
    }
    return true
  }

  const handleSignUpRequest = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      alert('이메일 확인')
      return
    }
    if (!validatePassword(password)) {
      alert('비밀번호 확인')
      return
    }
    if (!validatePasswordCheck(password, passwordCheck)) {
      alert('비밀번호 불일치')
      return
    }
    axios
      .post(
        '/sign-up',
        { email: email, password: password, mobile: mobile },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: token,
          },
        },
      )
      .then((res) => {
        console.log('signup:', res)
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div id="signup_container">
      <form onSubmit={handleSignUpRequest}>
        <Label for="email" value="이메일" />
        <Input
          type="email"
          required
          id="email"
          onChange={setEmail}
          value={email}
          error={error}
          validator={validateEmail}
        />
        <Label for="password" value="비밀번호" />
        <Input
          type="password"
          required
          id="password"
          onChange={setPassword}
          value={password}
          error={error}
          validator={validatePassword}
        />
        <Label for="passwordCheck" value="비밀번호 확인" />
        <Input
          type="password"
          required
          id="passwordCheck"
          onChange={setPasswordCheck}
          value={passwordCheck}
          validator={validatePasswordCheck}
        />
        <Label for="tel" value="연락처" />
        <Input
          type="tel"
          required
          id="tel"
          onChange={setMobile}
          value={mobile}
          error={error}
        />
        <Button value="회원가입" type="submit" />
      </form>
    </div>
  )
}

export default SignUp
