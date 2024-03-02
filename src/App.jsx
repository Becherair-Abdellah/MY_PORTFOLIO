import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashboard from './dashboard/Dashboard'
import Portfolio from './components/frontend/Portfolio'
// import Login from './dashboard/Login'
// import ResetPassword from './dashboard/ResetPassword' 
function App() {
  return (
 <>
 <Portfolio/>
 </>
)
}

export default App
