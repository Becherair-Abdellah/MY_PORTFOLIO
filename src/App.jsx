import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashboard from './dashboard/Dashboard'
import Portfolio from './components/frontend/Portfolio'
import Login from './dashboard/Login'
import ResetPassword from './dashboard/ResetPassword' 
function App() {
  return (
<Provider store={store}>
  <Routes>


    <Route exact path='/*' element={<Portfolio/>}/>
    <Route exact path='/dashboard_04_01/*' element={<Dashboard/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/reset' element={<ResetPassword/>}/>

  </Routes>


</Provider>
)
}

export default App
