import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import Links from './Links'
import Add_Article from './Add_Article'
import Add_Product from './Add_Product'
function Dashboard() {
    // document.body.classList.add('overflow-hidden')
  return (
    <div className='absolute w-full h-full top-0 left-0 bg-gr z-[11] select-none'>
        <div className='p-4 flex items-center justify-between'>
        <h1 className='text-2xl text-white first-letter:text-[3rem] first-letter:text-TextredColor w-fit'>Abdellah Becherair</h1>
        <Links/>
        </div>
        <div>
            <Routes>
            <Route exact path='addArticle_04/' element={<Add_Article/>}/>
        <Route exact path='addProduct_04/' element={<Add_Product/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
