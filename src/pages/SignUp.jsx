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

  const validateInput = (email, password, passwordCheck) => {
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if (!reg.test(email)) {
      alert('이메일 확인')
      return false
    } else if (password.length < 8 || password.length > 15) {
      alert('비밀번호 확인')
      return false
    } else if (password !== passwordCheck) {
      alert('비밀번호 불일치')
      return false
    } else {
      return true
    }
  }

  const handleSignUpRequest = () => {
    if (validateInput(email, password, passwordCheck)) {
      axios
        .post(
          'https://mycroft-test-api.herokuapp.com/sign-up',
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
  }

  return (
    <div id="signup_container">
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
      <Label for="passwordCheck" value="비밀번호 확인" />
      <Input
        type="password"
        required
        id="passwordCheck"
        onChange={setPasswordCheck}
        value={passwordCheck}
      />
      <Label for="tel" value="연락처" />
      <Input type="tel" required id="tel" onChange={setMobile} value={mobile} />
      <Button value="회원가입" onClick={handleSignUpRequest} />
    </div>
  )
}

export default SignUp
