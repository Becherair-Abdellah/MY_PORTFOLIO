import React from "react"
// import Logo from "../../public/logo.png"
import { Link } from "react-router-dom"
function ResetPassword() {
  return (
   <>
   <div className="parent  flex justify-center  items-center">
    <div className="md:w-full">
    <div href="#" className="hidden items-center mb-6 text-2xl font-semibold md:flex text-gray-900  flex-col">
        {/* <img className="w-[400px] h-[350px]" src={Logo} alt="logo" /> */}
        <h1 className="text-3xl relative text-white bg-primaryColor">
           I FORGET MY PASSWORD
            <span className='w-[40px] h-[3px] absolute top-[-.43rem] right-[-.43rem]  bg-primaryColor'></span>
    <span className='w-[3px] h-[30px] absolute top-[-.43rem] right-[-.43rem] bg-primaryColor'></span>

    <span className='w-[40px] h-[3px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor'></span>
    <span className='w-[3px] h-[30px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor'></span></h1>
      </div>
    </div>
   <section className="z-[11]  w-full -translate-x-[50%] -translate-y-[50%] absolute top-[50%] left-[50%] md:relative md:left-0 md:top-0 md:translate-x-0 md:translate-y-0">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-[#434343f0] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
    <span className='w-[40px] h-[4px] absolute top-[-.43rem] right-[-.43rem] bg-primaryColor'></span>
    <span className='w-[4px] h-[30px] absolute top-[-1.4rem] md:top-[-1.7rem] right-[-.43rem] bg-primaryColor'></span>
    <span className='w-[40px] h-[4px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor'></span>
    <span className='w-[4px] h-[30px] absolute bottom-[-.43rem] left-[-.43rem] bg-primaryColor'></span>
          <h1 className=" font-bold leading-tight text-white tracking-tight  text-3xl ">
           Reset you password
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Passowrd</label>
              <input
                type="password"
                name="password"
                id="email"
                className=" border border-gray-300 sm:text-sm rounded-lg   block w-full p-2.5   dark:placeholder-gray-400 outline-none text-white   bg-[#ffffff14]"
                placeholder="••••••••"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white ">Confirm Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className=" border border-gray-300 sm:text-sm rounded-lg   block w-full p-2.5   dark:placeholder-gray-400 outline-none text-white   bg-[#ffffff14]"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
        
              </div>
              <Link to="/dashboard/sigin" className="text-sm font-medium text-primary-600 hover:underline text-white">I have an account</Link>
            </div>
            <button
              type="submit"
              className="w-full  bg-primary-600 hover:bg-primary-700  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 bg-blue-600 text-white "
            >
             Reset Password
            </button>
            
          </form>
        </div>
      </div>
    </div>
  </section>
   </div>
   </>
  )
}

export default ResetPassword
