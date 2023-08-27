import React, { useState } from 'react'

function BoxArticle({title,text,srcimg,created}) {
  return (
    <>

    <div className="boxArticle duration-300 border p-4 relative rounded bg-gr-op cursor-pointer overflow-hidden">
          <img src={srcimg} className='absolute rounded z-[-1] h-full w-full left-0 top-0 object-cover ' alt="" />
          <h1 className='text-white font-semibold text-2xl mb-4'>{title}</h1>
          <p className='text-white'>{text}</p>
          <span className='text-white text-[15px] mt-2 block'>{created}</span>
        </div>
    </>
    
  )
}

export default BoxArticle
