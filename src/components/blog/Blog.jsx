import React from 'react'
import img1 from '../../assets/img2.jpg'
function Blog() {
  return (
    <div>
      <h1 className='bg-gr text-white p-6 text-4xl text-center'>Blogs</h1>
      <div className="blogs p-10 mt-10">
        <div className="box duration-300 border p-4 relative rounded bg-gr-op cursor-pointer overflow-hidden">
          <img src={img1} className='absolute rounded z-[-1] h-full w-full left-0 top-0 object-cover ' alt="" />
          <h1 className='text-white font-semibold text-2xl mb-4'>Title of Article</h1>
          <p className='text-white'>How to make Http request using react js without next js that mean you don need any packages of system design or put it some changes</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
