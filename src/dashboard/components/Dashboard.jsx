import React, { useEffect, useState } from 'react'
import {FaBars } from "react-icons/fa"
import { Outlet } from 'react-router'
import Aside from './Aside'
import img from "../../assets/i2.jpg"
import {useDispatch } from 'react-redux'
// import actions 
import {show} from "../redux/Reducers"
import { show_signout } from '../redux/Reducers'
function Dashboard() {
  // const showAside = useSelector(({show_and_hide_aside:{aside}})=>aside);
  const styles = `main_page relative py-[24px] md:ml-[70px] top-[38px] animated-bg_test text-white flex justify-between p-[1rem]`;
  const dispatch = useDispatch();
  return (
    <div className=''>
      {/* <Signout/> */}
      <header className=' select-none bg-[#434343f0] fixed w-full z-[1] flex justify-between items-center p-2 md:w-cuWidth md:left-[70px]'>
        {/* search  */}
        {/* <Search/> */}
        <div className='flex items-center gap-3'>
       <div className='hover:bg-[#ffffff14] p-3 rounded-full  cursor-pointer text-white' onClick={()=> dispatch(show())}>
       <FaBars  size={20} />
       </div>

        </div>



    
          
          <div className='flex items-center justify-between gap-3'>



          <div className='hover:bg-[#ffffff14] p-2  rounded-full cursor-pointer' onClick={()=>{
            dispatch(show_signout());
            console.log('ren time for');}
        }>
          <div className='w-[30px] h-[30px] '>
            <img src={img} className='h-full w-full object-cover rounded-full cursor-pointer' alt="" />
          </div>
          </div>


          </div>
          
       
      </header>

      <div className={styles}>
        <Outlet/>
        {/* <Overview/> */}
        {/* <Users /> */}
        {/* <Events/> */}
        {/* <Blog/> */}
        {/* <Messages/> */}
      </div>
      <Aside/>
    </div>
  )
}

export default Dashboard
