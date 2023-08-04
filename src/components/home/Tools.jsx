import React from 'react'
import {PiFramerLogoFill} from 'react-icons/pi'
import {FaHtml5,FaNpm,FaCss3Alt,FaReact} from 'react-icons/fa'
import {SiTailwindcss,SiRedux,SiNextdotjs,SiEleventy,SiSwiper,SiVisualstudiocode,SiPostman, SiJavascript} from 'react-icons/si'
import {TbApi} from 'react-icons/tb'
import {BsGit,BsGithub} from 'react-icons/bs'
import vite  from '../../assets/vite.svg';
import chart from '../../assets/chartjs-logo.svg'
function Tools() {
    return (    
        <div className='gr mt-5'>
      <div className='mb-10 p-[2rem]'>
      <div>
                <h1 className='text-5xl leading-[4rem] font-semibold text-TextredColor mb-8'>Front-End Fusion: Tools and Techniques</h1>
            </div>
            <div className='text-TextColor text-lg leading-8 mb-5'>
                Welcome to 'PrimeFront: Mastering Web Experiences' – a showcase of my journey into the captivating realm of front-end development. This portfolio encapsulates my dedication to crafting seamless and visually enchanting digital experiences. Within these virtual pages, you'll discover a curated selection of projects and endeavors that highlight my proficiency in utilizing a diverse array of front-end tools. Join me as we delve into the art of transforming code into captivating user interfaces, breathing life into pixels, and pushing the boundaries of web innovation. Let's explore the intersection of creativity and technology, where 'PrimeFront' becomes a testament to the boundless possibilities of the digital canvas.
            </div>
      </div>
            <div className='flex justify-center flex-wrap gap-5 p-[2rem] relative z-[-1]'>
                {/* framer motion  */}
                <div className='text-white animate-bounce'><PiFramerLogoFill className='cursor-pointer' size={100}/></div>
                {/* html  */}
                <div className='bg-r text-[#e44f26ff] animate-pulse'><FaHtml5 size={100}/></div>
                <div className='text-[#1172b8ff] animate-pulse'><FaCss3Alt size={100}/></div>
                <div className='text-[#00d8ffff]'><FaReact size={100}/></div>
                <div className='text-[#44a8b3ff] animate-bounce'><SiTailwindcss size={100}/></div>
                <div className='text-red-800 animate-pulse'><FaNpm size={100}/></div>
                <div className='text-[#e44f26ff] animate-pulse'><BsGit size={100}/></div>
                <div className='text-white animate-pulse'><BsGithub size={100}/></div>
                <div className='text-white'><SiNextdotjs size={100}/></div>
                <div className='text-[#764abc] animate-pulse'><SiRedux size={100}/></div>
                <div className='text-white'><SiEleventy size={100}/></div>
                <div className='text-white animate-pulse'><TbApi size={100}/></div>
                <div className='text-[#0080ff] animate-pulse'><SiSwiper size={100}/></div>
                <div className='text-[#0080ff] animate-bounce'><SiVisualstudiocode size={100}/></div>
                <div><SiJavascript size={100} className='text-[#ffca28ff]'/></div>
                <div className='text-[#e44f26ff] animate-pulse'><SiPostman size={100}/></div>
                <div><img className='w-[100px]' src={vite} alt="" /></div>
                <div><img className='w-[120px] animate-pusle' src={chart} alt="" /></div>
            </div>
        </div>
    )
}

export default Tools
