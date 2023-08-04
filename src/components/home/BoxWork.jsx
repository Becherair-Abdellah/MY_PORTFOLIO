import { Link } from "react-router-dom"

function BoxWork({color,icon,title,text}) {
  const styles = `p-4 border-[${color}] text-start bg-[#262626] rounded-lg shadow-lg mb-5`
  console.log(color)
  return (
 <>
    <div className={styles}>
        {icon}
      <h1 className='text-white text-2xl mt-3'>{title}</h1>
      <p className='text-white py-3 leading-6'>
        {text}
      </p>
    </div>
 </>
  )
}

export default BoxWork
