import React from 'react'
import { Routes,Route, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Dashboard from './dashboard/Dashboard'
import Portfolio from './components/frontend/Portfolio'
import Footer from './components/Footer'
// import Login from './dashboard/Login'
// import ResetPassword from './dashboard/ResetPassword' 
function App() {
  return (
 <>
 {/* <Portfolio/> */}
 <div className='w-full p-3 text-md bg-gradient-to-r from-blue-700 text-white to-red-600 text-center'>
        <p>I write more articles <span className='hidden md:inline'>About Frontend exactly react js and next</span> on my <a href="https://www.linkedin.com/in/abdellahbecherair/" className='font-bold underline'>LinkedIn</a></p>
    </div>
 <div className='md:w-[85%] mx-auto mt-2 md:mt-6 p-3'>
 <Outlet/>
 </div>
 <div className='w-full bg-[#262626]  '>
 <Footer/>
 </div>
 </>
)
}

export default App
