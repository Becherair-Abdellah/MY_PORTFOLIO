import React, { useEffect } from 'react'
import Button from '../Button'
import { motion } from 'framer-motion'
import IMG from '../../assets/hero.svg'
import { BsLinkedin, BsGithub,BsTriangle,BsStar } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
import {LiaCircle,LiaSquare} from 'react-icons/lia'
import SocialMedia from './SocialMedia'
function Hero() {
  return (
    <div className='md:grid lg:grid-cols-2 gap-[5rem] p-[2rem]'>
      <div className=''>
        <h1 className='text-5xl leading-[4rem] font-semibold text-TextredColor mb-8'>Bringing Designs to Life Through Code and Creativity</h1>
        <p className=' text-TextColor text-lg leading-8 mb-5'>As a Front-End Developer, I specialize in crafting visually engaging and interactive web experiences. With a strong foundation in HTML, CSS, and JavaScript, I create seamless user interfaces using modern frameworks and tools. My passion for design and attention to detail allow me to bring creativity and innovation to every project I work on. Let's build something amazing together!</p>
        <Button />
        <SocialMedia/>
      </div>
      <div className='mt-14 md:m-0 relative z-[-1]'>
        <img className='z-[-1]' src={IMG} alt="" />
      </div>
    </div>
  )
}

export default Hero
