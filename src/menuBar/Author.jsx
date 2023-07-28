import React from 'react'
import {motion} from 'framer-motion'
const Author = ({name}) => {
  return (
    <motion.div className='text-white text-3xl font-semibold first-letter:text-TextredColor first-letter:text-5xl'
    whileHover={{scale:1.2}}
    >
      {name}
    </motion.div>
  )
}

export default Author
