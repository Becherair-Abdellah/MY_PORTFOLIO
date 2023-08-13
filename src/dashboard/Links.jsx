import React from 'react'
// import {GrArticle} from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import { AiFillCode } from 'react-icons/ai'
import { MdArticle } from 'react-icons/md'
function Links() {
  return (
    <div className='xl:fixed flex xl:block gap-4  xl:left-4 xl:top-1/2 xl:-translate-y-1/2'>
      <NavLink className='w-fit' to='addArticle_04'>
      <span className='flex gap-3 items-center text-white xl:border xl:mb-5 rounded p-2'><MdArticle size={30} className='ic_r text-white w-fit'/> <strong className='hidden xl:block'>Article</strong></span>
      </NavLink>
      <NavLink to='addProduct_04'>
      <span className='flex gap-3 items-center text-white xl:border xl:mb-5 rounded p-2'><AiFillCode size={30}  className='ic_r text-white w-fit' /><strong className='hidden xl:block'>products</strong></span>
      </NavLink>
    </div>
  )
}

export default Links
