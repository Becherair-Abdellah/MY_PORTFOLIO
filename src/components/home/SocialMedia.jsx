import React from 'react'
import { BsLinkedin, BsGithub,BsTriangle,BsStar } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
function SocialMedia() {
  return (
<div className='flex mt-8 w-fit items-center gap-3' >
          <BsLinkedin size={25} className='text-TextColor cursor-pointer' />
          <MdAlternateEmail size={25} className='text-TextColor cursor-pointer' />
          <BsGithub size={25} className='text-TextColor cursor-pointer' />
          <FaTwitterSquare size={25} className='text-TextColor cursor-pointer' />
        </div>
  )
}

export default SocialMedia
