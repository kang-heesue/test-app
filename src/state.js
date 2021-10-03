import { atom } from 'recoil'

export const loginState = atom({
  key: 'login',
  default: false,
})

export const tokenState = atom({
  key: 'token',
  default: null,
})
