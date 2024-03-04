import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {
  return (
 <>
 <div className='w-full p-3 text-md bg-gradient-to-r from-blue-700 text-white to-red-600 text-center'>
        <p>I write more articles <span className='hidden md:inline'>About Frontend exactly react js and next</span> on my <a href="https://www.linkedin.com/in/abdellahbecherair/" className='font-bold underline'>LinkedIn</a></p>
    </div>
 <div className='md:w-[85%] mx-auto md:mt-6 p-3'>
  <Navbar/>
 <Outlet/>
 </div>
 <div className='w-full bg-[#262626]  '>
 <Footer/>
 </div>
 </>
)
}

export default App
