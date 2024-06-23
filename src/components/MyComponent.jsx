import React from 'react'
import CodeShowcase from './my_compoennets_created/Buttons_outside_border'

function MyComponent() {
  return (
    <div>
      <h2 className='text-white font-bold text-center text-4xl   md:text-6xl md:tracking-[-.2rem] leading-[5rem]?'>This is a set of UI components I built using React JS and Tailwind for later reuse .</h2>
      {/* components */}

      <div className='mt-20'>
        {/* components nbr 1  */}
        <div>
            <h1 className='text-2xl text-white mb-6'>
                1 . Buttons
            </h1>
            {/* code and  preveiw */}
            <div>
                {/* code  */}
                <div>
                    <CodeShowcase/>
                </div>
                {/* preview  */}
                <div></div>

            </div>
        </div>

      </div>



    </div>
  )
}

export default MyComponent
