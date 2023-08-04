import React from 'react'

function Footer({year,name}) {

  return (
    <div className='text-center text-white p-4'>
      © {year} {name}. All Rights Reserved.
    </div>
  )
}

export default Footer
