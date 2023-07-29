import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import { Routes,Route } from 'react-router-dom'
import { Example } from './menuBar/Example'
import './menuBar/style.css'

function App() {
  return (
<>

<Example/>
<div className='mainpage mt-16 mb-16 h-[100vh] sm:mt-[80px]'>
<Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/about' element={<About/>} />
    <Route exact path='/contact' element={<Contact/>} />
    <Route exact path='/projects' element={<Projects/>} />
    <Route exact path='/blog' element={<Blog/>} />
    <Route exact path='/*' element={<h1>Not Found !!</h1>} />
    </Routes>
</div>
</>

  )
}

export default App
