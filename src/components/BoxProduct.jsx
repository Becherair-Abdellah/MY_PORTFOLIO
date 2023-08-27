import React from 'react'

function BoxProduct({name_product,img,descrp}) {
    return (
        <div className="box duration-300 rounded  relative  cursor-pointer overflow-hidden ">
              <img src={img} className=' rounded-t z-[-1]  w-full left-0 top-0 object-cover ' alt="" />
             <div className='p-3 bg-gr rounded-b border-t-[1px]'>
             <h1 className='text-white text-4xl  font-semibold  mb-2'>{name_product}</h1>
              <p className='text-white'>{descrp}</p>
             </div>
            </div>
      )
}

export default BoxProduct
