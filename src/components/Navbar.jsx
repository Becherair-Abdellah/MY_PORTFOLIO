import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
function Navbar() {
    const [aside,setAside] = useState(true);
    const setDark = ()=>{
        document.querySelector('html').classList.toggle('dark');
    }
  return (
    <>
    <nav className=" border-gray-200 relative w-full mb-[4rem] p-0">
     
     {/* button open link  */}
     <div className={`flex justify-between items-center w-full text-white`}>
     <ul className={`${aside && 'hidden'} font-medium fixed h-screen md:h-full bg-[#222] md:bg-transparent md:relative left-0 w-[300px] md:w-full top-0 flex-col md:flex-row md:flex gap-8 text-2xl px-7 py-8 md:px-0 md:py-0 `}>
         <div className='md:hidden mb-8'>
             <MdClose size={35} color='white' className='cursor-pointer' onClick={()=>{
                setAside(true);
             }}/>
         </div>

         <li className='p-3 md:p-0'>
           <Link to="/MY_PORTFOLIO/" className="active" aria-current="page" onClick={()=>{
            setAside(true);
           }}><span className='md:hidden'>Home</span><IoHome size={35} className='hidden md:block'/></Link>
         </li>
         <li className='p-3 md:p-0'>
           <Link to="/MY_PORTFOLIO/blog" className="" aria-current="page" onClick={()=>{
            setAside(true);
           }}>Blog</Link>
         </li>
         <li className='p-3 md:p-0'>
           <Link to="/MY_PORTFOLIO/contact" className="" aria-current="page" onClick={()=>{
            setAside(true);
           }}>Contact</Link>
         </li>
         <li className='p-3 md:p-0'>
           <Link to="/MY_PORTFOLIO/about" className="" aria-current="page" onClick={()=>{
            setAside(true);
           }}>About</Link>
         </li>
         <li className='p-3 md:p-0'>
           <Link to="/MY_PORTFOLIO/sass" className="" aria-current="page" onClick={()=>{
            setAside(true);
           }}>My SASS</Link>
         </li>


       </ul>

        <div className='md:hidden' >
            <FaBars size={30} className='cursor-pointer' onClick={()=>{
                setAside(false);
             }}/>
        </div>
         {/* dark mode  */}
         <h1 className='text-xl font-bold text-white md:hidden'>Abdellah Becherair</h1>
         {/* dark mode  */}
         <div >
             {/* <MdOutlineDarkMode  size={30} className='cursor-pointer' onClick={()=>{
                setDark();
             }}/> */}
         </div>
         {/* aside bar  */}
         
     </div>
 </nav>
    </>
  );
}

export default Navbar;
