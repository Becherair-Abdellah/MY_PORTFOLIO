import React from 'react'
import Hero from './Hero'
import Tools from './Tools'
import Work from './Work'
import Quot from './Quot'
import Footer from '../Footer'
function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Hero/>
      <Tools/>
      <Work/>
      <Quot/>
      <Footer year={currentYear} name='Abdellah'/>
    </div>
  )
}

export default Home
