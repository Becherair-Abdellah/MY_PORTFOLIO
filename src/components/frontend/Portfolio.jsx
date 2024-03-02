import React from 'react'
import { Routes,Route, Outlet } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Projects from '../projects/Projects'
// import Blog from '../blog/Blog'
import { Example } from '../../menuBar/Example'
// import Article from '../blog/Article'
function Portfolio() {
  return (
    <>
      <Example/>
<div className='mainpage mt-16 mb-16 h-[100vh] sm:mt-[100px]'>
  <Outlet/>

</div>
    </>
  )
}

export default Portfolio
