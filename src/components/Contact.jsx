import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
import Footer from './Footer'
function Contact() {
  return (
<>
<h1 className='bg-gr text-white p-6 text-4xl text-center'>Contact</h1>
      <div className='p-4 '></div>
<div className='h-full flex flex-col justify-center '>
    <div className=''>
          <div className='bg-gr mx-auto  lg:w-[70%] p-6'>
            <h1 className='text-white font-semibold text-2xl'>Abdellah Becherair</h1>
            <div className="mt-8">
           <span className='text-TextColor text-[19px] lg:text-xl flex gap-4 items-center mb-3'>
           <BsLinkedin size={25} className=' cursor-pointer' />
           https://www.linkedin.com/in/abdellah-
becherair-198825263/
           </span>
           <span className='text-TextColor text-xl flex gap-4 items-center mb-3'>
           <BsGithub size={25} className=' cursor-pointer' />
           https://github.com/Becherair-Abdellah
           </span>

           <span className='text-TextColor text-xl flex gap-4 items-center mb-3'>
           <FaTwitterSquare size={25} className=' cursor-pointer' />
           https://github.com/Becherair-Abdellah
           </span>

           <span className='text-TextColor text-xl flex gap-4 items-center mb-3'>
           <IoLogoWhatsapp size={25} className=' cursor-pointer' />
           +213 666364546
           </span>

           <span className='text-TextColor text-xl flex gap-4 items-center mb-3'>
           <MdAlternateEmail size={25} className=' cursor-pointer' />
           abdellah.becherair04@gmail.com
           </span>

            </div>
          </div>
          </div>
  </div>
          <Footer/> 
</>
  )
}

export default Contact
