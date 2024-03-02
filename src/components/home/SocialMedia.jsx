import React from 'react'
import { BsLinkedin, BsGithub, BsTriangle, BsStar } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function SocialMedia() {
  return (
    <div className='flex mt-8 w-fit items-center gap-3' >
      <Link to="https://www.linkedin.com/in/abdellah-becherair-198825263/">
        <BsLinkedin size={40} className='text-TextColor cursor-pointer' />
      </Link>
      <Link to="mailto:abdellah.becherair04@gmail.com">
        <MdAlternateEmail size={40} className='text-TextColor cursor-pointer' />
      </Link>

      <Link to="https://github.com/Becherair-Abdellah" >
        <BsGithub size={40} className='text-TextColor cursor-pointer' />
      </Link>

      <Link to="https://twitter.com/AbdellahBecher">
        <FaTwitterSquare size={40} className='text-TextColor cursor-pointer' />
      </Link>
    </div>
  )
}

export default SocialMedia
