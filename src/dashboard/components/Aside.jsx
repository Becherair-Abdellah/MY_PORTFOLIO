import React, { useEffect, useRef, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {hide} from "../redux/Reducers"
import LinksUser from './LinkUser';
// import logo from "../../../public/logo.png"
function Aside() {
  const aside = useRef('');
  const dispatch = useDispatch()
  const showAside = useSelector(({show_and_hide_aside:{aside}})=>aside);
  const styles = `animated-bg border-r-2 border-white px-4 fixed h-[100vh] md:left-0 ${showAside?`left-0 md:w-[300px] `:`left-[-100%] md:w-[70px]`} w-[300px] z-[111] top-0 duration-200 bg-[#333]  flex flex-col justify-between`;
  const h1Style = `text-xl duration-500 text-white   font-bold text-primaryColor ${showAside?"":"md:hidden"}`;

  useEffect(()=>{
   
   const handleClick= (e)=>{
    if(!aside.current.contains(e.target)){
      dispatch(hide())
        
    }
    }
    document.addEventListener('mousedown',handleClick);

  },[]);
  const data = new Date;
  
  return (
    <aside ref={aside} className={styles}>
     <div>
      {/* logo */}
     <div className='flex items-center  gap-2 py-5 cursor-pointer' >
      {/* <img className='w-[50px]' src={logo} alt="" /> */}
      <h1 className={h1Style}>Abdellah Becherair</h1>
     </div>
    {/* links  */}
    <div>
      <LinksUser/>
    </div>
     </div>
    {/* footer  */}
    <div className='text-white text-sm font-normal w-full text-center'>
      <span className={showAside?' text-center relative bottom-4':'hidden'}>© {data.getFullYear()} <strong className=' text-primaryColor'>Abdellah</strong>,Inc. All rights reserved</span>
      <span className={showAside?' text-center hidden':'md:block hidden'}>© {data.getFullYear()}</span>
      </div>
  </aside>
  )
}

export default Aside
