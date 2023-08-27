import React from 'react'
import BoxWork from './BoxWork'
import { BiLogoZoom } from 'react-icons/bi'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'
import {AiOutlineApi} from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Work() {
  return (
    <div className='p-[2rem]'>
      <h1 className='text-5xl leading-[4rem] mb- font-semibold text-TextredColor mb-16' >How do I do my work?</h1>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <BoxWork color='#D309E1' title='Meeting with UI/UX Designer' icon={<BiLogoZoom color='#f2f2f2ff' size={50}/>} text='Conversing with a UI/UX Designer About Feasibility of Design, What Can Be Accomplished, What Can Be Eliminated, and Factors Affecting Product Performance'/>

        <BoxWork color='#7700FF' title='The Product Industry' icon={<BsFillFileEarmarkCodeFill color='#f2f2f2ff' size={50}/>} text='Transforming UI/UX Designs into Interactive Interfaces Enabling Users to Interact towards the Desired Goal, Utilizing Cutting-Edge JavaScript Technologies such as React.js and Next.js, Enabling Both Client-Side Rendering (CSR) and Server-Side Rendering (SSR)'/>

        <BoxWork color='#7700FF' title='Integrating with the Backend' icon={<AiOutlineApi color='#f2f2f2ff' size={50}/>} text='the process of connecting and incorporating the user interface (UI) and user experience (UX) design of a software application with the backend infrastructure. The backend typically consists of servers, databases, APIs and other components that manage data, logic, and operations that are not directly visible to users'/>


      </div>
    </div>
  )
}

export default Work
