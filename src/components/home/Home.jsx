import React from 'react'
import Hero from './Hero'
import Tools from './Tools'
import Work from './Work'
import Quot from './Quot'
import Footer from '../Footer'
import Navbar from '../Navbar'
import LatestBlogPosts from './LatestBlog'
function Home() {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tools/>
      <LatestBlogPosts/>
    </div>
  )
}

export default Home
