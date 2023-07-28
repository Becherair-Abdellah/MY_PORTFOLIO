import React from 'react'
import {motion} from 'framer-motion'
const Author = ({name}) => {
  return (
    <motion.div className='text-white text-3xl font-semibold first-letter:text-TextredColor first-letter:text-5xl cursor-pointer w-fit left-1/2 fixed -translate-x-1/2 top-3 sm:left-0 sm:block sm:translate-x-0 sm:relative sm:top-0'
    >
      {name}
    </motion.div>
  )
}

export default Author
