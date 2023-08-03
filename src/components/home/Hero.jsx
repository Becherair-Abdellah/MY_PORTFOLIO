import React, { useEffect } from 'react'
import Button from '../Button'
import { motion } from 'framer-motion'
import IMG from '../../assets/hero.svg'
import { BsLinkedin, BsGithub,BsTriangle,BsStar } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
import {LiaCircle,LiaSquare} from 'react-icons/lia'
function Hero() {
  return (
    <div className='md:grid md:grid-cols-2 gap-[5rem] p-[2rem]'>
      {/* <LiaCircle color='#00dd8eff' className='absolute z-[-1] right-[3rem] animate-bounce' size={40} />
      <LiaSquare color='#FF008C' className='absolute z-[-1] right-[40rem] animate-pulse' size={70} />
      <BsTriangle color='#9C1AFF' className='absolute z-[-1] left-[40rem] top-[70%] animate-bounce' size={50} />
      <LiaCircle color='#00dd8eff' className='absolute z-[-1] bottom-[3rem] animate-pulse' size={40} />
      <BsStar color='#ed4356' className='absolute z-[-1] left-[40rem]  animate-bounce' size={50} />
      <LiaSquare color='#faa231' className='absolute z-[-1] right-[30rem] top-[40rem] animate-pulse' size={70} />
      <BsTriangle color='#9C1AFF' className='absolute z-[-1] left-[40rem] top-[70rem] animate-bounce' size={50} /> */}
      <div className=''>
        <h1 className='text-5xl leading-[4rem] font-semibold text-TextredColor mb-8'>Bringing Designs to Life Through Code and Creativity</h1>
        <p className=' text-TextColor text-lg leading-8 mb-5'>As a Front-End Engineer, I specialize in crafting visually engaging and interactive web experiences. With a strong foundation in HTML, CSS, and JavaScript, I create seamless user interfaces using modern frameworks and tools. My passion for design and attention to detail allow me to bring creativity and innovation to every project I work on. Let's build something amazing together!</p>
        <Button />
        <div className='flex mt-8 w-fit items-center gap-3' >
          <BsLinkedin size={25} className='text-TextColor cursor-pointer' />
          <MdAlternateEmail size={25} className='text-TextColor cursor-pointer' />
          <BsGithub size={25} className='text-TextColor cursor-pointer' />
          <FaTwitterSquare size={25} className='text-TextColor cursor-pointer' />
        </div>
      </div>
      <div className='mt-14 md:m-0 relative z-[-1]'>
        <img className='z-[-1]' src={IMG} alt="" />
      </div>
    </div>
  )
}

export default Hero
