import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../Contact'
import Projects from '../projects/Projects'
import Blog from '../blog/Blog'
import { Example } from '../../menuBar/Example'
import Article from '../blog/Article'
function Portfolio() {
  return (
    <>
      <Example/>
<div className='mainpage mt-16 mb-16 h-[100vh] sm:mt-[100px]'>
<Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/about' element={<About/>} />
    <Route exact path='/contact' element={<Contact/>} />
    <Route exact path='/projects' element={<Projects/>} />
    <Route exact path='/blog' element={<Blog/>}/>
    <Route path='/articles/:id' element={<Article />}/>
   
    </Routes>
</div>
    </>
  )
}

export default Portfolio
