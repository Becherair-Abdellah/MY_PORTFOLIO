import React from 'react'
import v1 from '../assets/video/sassv.mp4'
function MySass() {
    scrollTo(0,0);
  return (
    <div>
   <main className='grid md:grid-cols-2 items-center py-10'>
   <div>
        <h1 className='md:text-5xl text-3xl font-bold text-white'>Hi Customer,</h1>
        <br></br>
        <p className='md:text-2xl text-xl text-white leading-[1.9rem] md:leading-[2.3rem] mb-[3rem]'>I'm so happy 😊😊 to have you here <br></br>
        This is a software about Sass that I'm working on developing. It enables owners of large warehouses to organize their logistics operations from managing shipments to inventory and sales .
        </p>
     </div>
     <div>
        <video className='rounded-md' src={v1} autoPlay></video>
     </div>
   </main>
    </div>
  )
}

export default MySass
