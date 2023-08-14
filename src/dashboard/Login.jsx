import React from 'react'

const Login  = () =>{
  return (
    <div className='absolute w-full h-full top-0 left-0 bg-gr z-[11] select-none'>
              <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className='bg-[#ffffff0f] p-5 rounded-md'>
                    
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-white text-3xl font-bold leading-9 tracking-tight bg_text">
            Sign in to your Dashboard
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='email'
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-none  p-2 outline-none text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-[#ffffff24] "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-white hover:text-TextredColor">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder='password'
                  required
                  className="block p-2 outline-none w-full rounded-md border-0 py-1.5 bg-[#ffffff24] text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <input type="submit" value='Login' className="flex w-full justify-center rounded-md bg-gr px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm cursor-pointer" />
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
