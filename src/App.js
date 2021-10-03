import React from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Authorization from './components/Authorization'
import Service from './pages/Service'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Mypage from './pages/Mypage'
import Detail from './pages/Detail'
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="container">
      <Header />
      <Authorization />
      <Switch>
        <Route exact path="/" component={Service} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage/order" component={Mypage} />
        <Route path="/mypage/order/" component={Detail} />
      </Switch>
    </div>
  )
}

export default App
