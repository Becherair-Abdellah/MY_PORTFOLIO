import React from 'react'
import Button from '../Button'
import IMG from '../../assets/h1.svg'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import {FaTwitterSquare} from 'react-icons/fa'
function Hero() {
  return (
    <div className='sm:flex sm:justify-between p-5'>
      <div>
        <h1 className='text-5xl leading-[4rem] font-semibold text-TextredColor mb-8'>Bringing Designs to Life Through Code and Creativity</h1>
        <p className=' text-TextColor text-lg leading-8 mb-5'>As a Front-End Engineer, I specialize in crafting visually engaging and interactive web experiences. With a strong foundation in HTML, CSS, and JavaScript, I create seamless user interfaces using modern frameworks and tools. My passion for design and attention to detail allow me to bring creativity and innovation to every project I work on. Let's build something amazing together!</p>
        <Button/>
        <div>
            <BsLinkedin/>
            <MdAlternateEmail/>
            <BsGithub/>
            <FaTwitterSquare/>
        </div>
      </div>
      <div>
        <img src={IMG} alt="" />
      </div>
    </div>
  )
}

export default Hero
