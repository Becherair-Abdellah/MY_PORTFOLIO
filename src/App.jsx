import React from 'react'
import About from './components/about/About'
import Contact from './components/Contact'
// import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import { Routes,Route } from 'react-router-dom'
import { Example } from './menuBar/Example'
import Article from './components/blog/Article'
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './dashboard/Add_Article'
import Signup from './dashboard/Add_Product'
import './menuBar/style.css'
import Add_Article from './dashboard/Add_Article'
import Add_Product from './dashboard/Add_Product'
import Dashboard from './dashboard/Dashboard'

function App() {
  return (
<Provider store={store}>


<Example/>
<div className='mainpage mt-16 mb-16 h-[100vh] sm:mt-[100px]'>
<Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/about' element={<About/>} />
    <Route exact path='/contact' element={<Contact/>} />
    <Route exact path='/projects' element={<Projects/>} />
    <Route exact path='/blog' element={<Blog/>}/>
    {/* <Route exact path='/login' element={<Login/>}/> */}
    {/* <Route exact path='/signup' element={<Signup/>}/> */}

        <Route exact path='/dashboard_04_01/*' element={<Dashboard/>}/>
      

    <Route path='/articles/:id' element={<Article />}/>
   
    <Route exact path='/*' />
    </Routes>
</div>
</Provider>
)
}

export default App
