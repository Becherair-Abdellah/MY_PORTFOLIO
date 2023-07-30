import React from 'react'
import {motion} from 'framer-motion'
import {FiDownload} from 'react-icons/fi'
function Button() {
        const buttonVariants = {
          rest: {
            scale: 1,
          },
          tap: {
            scale: 0.8,
          },
        };
  return (
    <motion.div  variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
     className='flex items-center gap-3 text-white font-bold text-xl bg-redColor w-fit rounded-full  px-4 py-2 cursor-pointer'>
      Download CV <FiDownload size={25}/>
    </motion.div>
  )
}

export default Button
