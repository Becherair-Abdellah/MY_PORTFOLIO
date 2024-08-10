import React, { useEffect } from 'react'
import BoxArticle from './BoxArticle'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
function Docker() {
    scrollTo(0,0);
  return (
    <div className='py-[3rem]'>
      <div className='border-b-2 pb-5'>
        <Link to='/blog' className='font-normal text-red-600 text-lg cursor-pointer hover:underline flex items-center gap-2'><FaArrowLeftLong />back to blog</Link>
        <h1 className='font-bold text-5xl text-white mt-5'>Docker</h1>
      </div>
      {/* posts  */}
      <div className='flex gap-5 flex-col py-12 md:grid md:grid-cols-2 lg:grid-cols-3'>
        <h1 className='text-center text-white'>No Articles Here</h1>

      </div>
    </div>
  )
}

export default Docker
