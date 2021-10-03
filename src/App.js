import React from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Service from './pages/Service'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Service} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  )
}

export default App
