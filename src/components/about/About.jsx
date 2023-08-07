import { Link } from 'react-router-dom';
import img from '../../assets/p2.jpg';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
import { FaTwitterSquare } from 'react-icons/fa'
import Footer from '../Footer';
function About() {
  return (
    <div className=''>
      <h1 className='bg-gr text-white p-6 text-4xl text-center'>About</h1>
      <div className='p-4 '>

        <div>

          <h1 className='text-white text-5xl font-semibold py-4 xl:p-10'>Hi I'm Abdellah 👋</h1>

          <div className='xl:flex xl:flex-row-reverse xl:p-10 xl:gap-8'>
            {/* imgs */}

            <img src={img} className='rounded-lg w-[300px] mx-auto my-8 ' />



            <div className='mt-8 text-TextColor text-xl leading-9 '>
              I am Abdellah Becherair, a student at the Faculty of Computer Science in Algeria (University Kasdi Merbah) in my second year of university. Currently, I work as a front-end developer in the field of web development, thanks to my self-directed learning. My journey in web development began in 2019 when I started learning the basics of the web: HTML, CSS, and JavaScript. I began designing templates and ready-made pages to enhance my practical experience at the start of my academic and professional journey.

              In 2020, I obtained a bachelor's degree in Experimental Science. After that, I joined the Faculty of Computer Science and began my academic journey there. I started learning algorithms and data structures as core subjects using the C language, along with other subjects like Information Systems, Algebra, and Analysis.

              In addition to my academic studies, I was learning web programming as a front-end developer. Now, I have experience in programming and developing professional and appealing user interfaces using technologies like React.js, Next.js, and my JavaScript skills.
            </div>
          </div>
          <div className='xl:p-10'>
          <h1 className='block font-semibold text-TextredColor text-4xl mt-10'>My mission is</h1>
          <p className='mt-8 text-TextColor text-xl leading-9 '>
          At the heart of my journey is a relentless pursuit of excellence in web development and computer science. With a solid foundation built on self-directed learning and formal education, my mission is to craft exceptional user experiences through innovative front-end solutions. I am dedicated to seamlessly blending creativity and technical expertise, employing cutting-edge technologies such as React.js and Next.js, to shape digital interfaces that captivate, engage, and inspire. By continually pushing the boundaries of my skills and knowledge, I aim to contribute meaningfully to the ever-evolving landscape of web development, making a positive impact and leaving a lasting mark in the digital realm.
          </p>
          </div>
          <div className='xl:p-10'>
          {/* my Information */}

          <div>
          <h1 className='text-TextredColor font-semibold text-4xl mb-5'>My Information</h1>
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
          
          <div className='bg-gr py-10 px-5  mt-8 text-center text-TextColor text-2xl leading-9 '>
          I write articles about what I do, and you can benefit from my expertise
          <Link className='text-white hover:text-TextredColor duration-300 block text-lg mt-7 border-red-600' to='/blog'>read articles</Link>
          </div>
          </div>
        </div>



      </div>
    <Footer/>
    </div>
  )
}

export default About
