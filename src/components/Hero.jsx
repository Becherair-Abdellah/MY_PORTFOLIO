import React, { useEffect } from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import IMG from '../assets/hero.svg'
import { BsLinkedin, BsGithub,BsTriangle,BsStar } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
import {LiaCircle,LiaSquare} from 'react-icons/lia'
import SocialMedia from './SocialMedia'
function Hero() {
  return (
    <div className='md:grid lg:grid-cols-2 border-b-2 pb-[4rem] md:pb-[8rem] '>
      <div className=''>
        <h1 className='text-white text-3xl mb-4 md:text-3xl'>Hi, I'm</h1>
        <h1 className='text-5xl leading-[3.5rem] font-semibold text-TextredColor mb-8 md:text-8xl'>ABDELLAH BECHERAIR</h1>
        <h1 className='text-white text-2xl md:text-3xl md:leading-[3rem] leading-[2.5rem] mb-10'><strong>Software Engineer</strong>,<strong className=''> Frontend Developer </strong>Write some articles on LinkedIn about <strong>Web Development</strong></h1>
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
