import React from 'react'

function Add_Article() {
    document.body.classList.add('overflow-hidden')
  return (
    <div className='top-0 h-screen z-[11] relative left-[12%] w-[88%] select-none'>
        <div className='m-auto rounded-md'>
        <div className=''>
            <h1 className='bg_text text-3xl p-3 text-center text-white'>SignIn</h1>
            <form className='text-center' action="">
                <input className='p-1 outline-none rounded-md text-TextredColor' type="email" placeholder='email' />
                <input className='p-1 outline-none rounded-md text-TextredColor mt-2' type="password" placeholder='password'/>
                <span className='block mt-3 text-white cursor-pointer'>forget password ?</span>
                <input className='text-white border p-1 px-2 rounded hover:bg-redColor cursor-pointer duration-300 mt-3' type='submit' value='login'/>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Add_Article
