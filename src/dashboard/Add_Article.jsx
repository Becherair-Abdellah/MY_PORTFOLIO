import React, { useState } from 'react'
import axios from 'axios';
function Add_Product() {  
  return (
    <div className='mb-4 top-0 h-full z-[11] relative xl:left-[12%] xl:w-[80%] select-none px-6'>
      <form className='flex xl:w-[50%] mx-auto flex-col bg-[#ffffff0f] p-4 rounded-md' action="">
      <label className='text-white text-xl mb-2 ' htmlFor="">Title</label>
        <input type="text" placeholder='title of article' className='outline-none p-3 rounded-md text-white bg-[#ffffff24]' />
        <label className='text-white text-xl my-2' htmlFor="">description</label>
        <textarea type="text" placeholder='Article description' className='outline-none p-3 rounded-md text-white bg-[#ffffff24]' rows={10} />
        <label className='text-white text-xl my-2' htmlFor="">Article</label>
        <textarea rows={13} type="text" placeholder='your project' className='outline-none p-3  rounded-md text-white bg-[#ffffff24]' />
        <input className='mt-4' type="file" placeholder='eeer'/>
        <input className='text-white text-lg bg-gr mt-2 rounded-md cursor-pointer' type='submit' value='send' />
      </form>
    </div>
  )
}

export default Add_Product
