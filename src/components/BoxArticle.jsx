import React, { useState } from 'react'

function BoxArticle({title,text,created}) {
  return (
    <>

    <div className="boxArticle duration-300 ho hover:border-red-500 border-2 border-gray-500 p-4 relative rounded bg-[#404040] cursor-pointer overflow-hidden">
      <h2 className='text-[16px] text-white mb-3'><span className='mr-4'>21 Feb 2024</span><span>10 min read</span></h2>
          <h1 className='text-white font-semibold text-3xl mb-4'>{title}</h1>
          <p className='text-white text-lg'>{text}</p>
          <span className='text-white text-[15px] mt-2 block'>{created}</span>
        </div>
    </>
    
  )
}

export default BoxArticle
