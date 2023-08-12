import React from 'react'

function BoxArticle({title,text,srcimg}) {
  return (
    <div className="box duration-300 border p-4 relative rounded bg-gr-op cursor-pointer overflow-hidden">
          <img src={srcimg} className='absolute rounded z-[-1] h-full w-full left-0 top-0 object-cover ' alt="" />
          <h1 className='text-white font-semibold text-2xl mb-4'>{title}</h1>
          <p className='text-white'>{text}</p>
        </div>
  )
}

export default BoxArticle
