import React, { useState } from 'react'
import axios from 'axios';
function Add_Product() {  
  const [title,setTitle] = useState('');
  const [descrp,setDescrp] = useState('');
  const [article,setArticle] = useState('');
  const handleApi = async()=>{
    let date = new Date();
    date = `${date.getFullYear()} ${date.getUTCMonth()} ${date.getDate()}`;
    const data = {
      "title": title,
      "descrp": descrp,
      "body": article,
      "created": date,
    }
    try{
      const request = await axios.post("http://localhost:4350/articles",data);
      console.log(request);
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className='mb-4 top-0 h-fit z-[11] relative xl:left-[12%] xl:w-[80%] select-none px-6'>
      <form className='flex xl:w-[50%] mx-auto flex-col bg-[#ffffff0f] p-4 rounded-md' action="">
      <label className='text-white text-xl mb-2 ' htmlFor="">Title</label>
        <input type="text" placeholder='title of article' className='outline-none p-3 rounded-md text-white bg-[#ffffff24]' onChange={(e)=>{setTitle(e.target.value)}} />
        <label className='text-white text-xl my-2' htmlFor="">description</label>
        <textarea type="text" placeholder='Article description' className='outline-none p-3 rounded-md text-white bg-[#ffffff24]' rows={10} onChange={(e)=>{setDescrp(e.target.value)}} />
        <label className='text-white text-xl my-2' htmlFor="">Article</label>
        <textarea rows={13} type="text" placeholder='your Article' className='outline-none p-3  rounded-md text-white bg-[#ffffff24]' onChange={(e)=>{setArticle(e.target.value)}} />
        <input className='mt-4' type="file" placeholder='eeer'/>
        <input className='text-white text-lg bg-gr mt-2 rounded-md cursor-pointer' type='submit' value='send' onClick={(e)=>{
          e.preventDefault();
          handleApi();
        }} />
      </form>
    </div>
  )
}

export default Add_Product
