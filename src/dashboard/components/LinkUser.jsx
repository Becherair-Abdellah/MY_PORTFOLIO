import React, { useState } from 'react'
import {FiUsers,FiSettings,FiLogOut} from 'react-icons/fi'
import {BsBox,BsTelephone,BsCalendar2Event  } from 'react-icons/bs'
import {BiMessageSquareDots } from "react-icons/bi";
import {RiArticleLine } from "react-icons/ri";
import {LuLayoutDashboard } from "react-icons/lu"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hide } from '../redux/Reducers';
function LinksUser() {
  const dispatch = useDispatch();
  const showAside = useSelector(({show_and_hide_aside:{aside}})=>aside);
  const spanStyle = `${!showAside?"md:hidden":""}`
  return (
    <motion.ul 
      transition={{
        duration: 0.1,
      }} className=' duration-300 text-white w-full rounded-md  mt-4 '>

      <NavLink to="/MY_PORTFOLIO/dashboard">
      <li className='flex items-center gap-3 p-3 px-2 text-[17px] hover:bg-[#ffffff14]  cursor-pointer rounded-md text-white-600' ><LuLayoutDashboard size={21}/> <span className={spanStyle}>Dashboard</span></li>
      </NavLink>
      <NavLink to="/MY_PORTFOLIO/dashboard/blogs">
      <li className='flex items-center gap-3 p-3 px-2 text-[17px] hover:bg-[#ffffff14]  cursor-pointer rounded-md text-white-600' ><RiArticleLine size={21}/> <span className={spanStyle}>Articles</span></li>
      </NavLink>

    </motion.ul>
  )
}

export default LinksUser
