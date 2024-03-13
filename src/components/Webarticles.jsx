import React, { useEffect } from 'react'
import BoxArticle from './BoxArticle'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'
function Webarticles() {
    scrollTo(0,0);
  return (
    <div className='py-[3rem]'>
      <div className='border-b-2 pb-5'>
        <Link to='/MY_PORTFOLIO/blog' className='font-normal text-red-600 text-lg cursor-pointer hover:underline flex items-center gap-2'><FaArrowLeftLong />back to blog</Link>
        <h1 className='font-bold text-5xl text-white mt-5'>WEB</h1>
      </div>
      {/* posts  */}
      <div className='flex gap-5 flex-col py-12 md:grid md:grid-cols-2 lg:grid-cols-3'>
<Link to='/MY_PORTFOLIO/blog/csr+ssr'>

        <BoxArticle title={`What is the CSR and SSR in Web And How they work 🤔`} text={`The CSR && SSR are two different methods for dynamically displaying web pages we will explain them`} date={`10 MAR 2024`} time={`10 min`}/>
</Link>
<Link to='/MY_PORTFOLIO/blog/clientside'>
<BoxArticle title={`What is The client-side frameworks And how it works`} text={`What are frameworks, how do they work, what solutions do they provide, and what is the relationship with javaScript`} date={`10 MAR 2024`} time={`10 min`}/>
</Link>

      </div>
    </div>
  )
}

export default Webarticles
