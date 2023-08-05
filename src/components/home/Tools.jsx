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
                <div className='text-white'><PiFramerLogoFill  className='xl:text-[100px] text-[50px]'/></div>
                {/* html  */}
                <div className='bg-r text-[#e44f26ff]'><FaHtml5 className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-[#1172b8ff] '><FaCss3Alt className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-[#00d8ffff]'><FaReact className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-[#44a8b3ff]'><SiTailwindcss className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-red-800'><FaNpm className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-[#e44f26ff]'><BsGit className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-white '><BsGithub className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-white'><SiNextdotjs className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-[#764abc]'><SiRedux className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-white'><SiEleventy className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-white '><TbApi className='xl:text-[100px] text-[50px]'/></div>
                <div className='text-[#0080ff]'><SiSwiper className='xl:text-[100px] text-[50px]'/></div>
                <div className='xl:text-[100px] text-[50px] text-[#0080ff]'><SiVisualstudiocode size={50}/></div>
                <div><SiJavascript className='text-[#ffca28ff] xl:text-[100px] text-[50px]' /></div>
                <div className='text-[#e44f26ff]'><SiPostman className='xl:text-[100px] text-[50px]'/></div>
                <div><img className='xl:w-[100px] w-[50px]' src={vite} alt="" /></div>
                <div><img className='xl:w-[100px] w-[50px]' src={chart} alt="" /></div>
            </div>
        </div>
    )
}

export default Tools
