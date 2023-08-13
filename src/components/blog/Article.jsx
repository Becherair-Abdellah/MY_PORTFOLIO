import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { set_id } from '../../redux/Acions';
import Footer from '../Footer'
import axios from 'axios'
function Article() {
    // const id = 2;
    // const Id = useSelector(({id})=>id);
    const dispatch = useDispatch();
    if(localStorage.getItem("ID")){
      const Idx = JSON.parse(localStorage.getItem("ID"));
     dispatch(set_id(Idx))
      
    }
  const Id = useSelector(({id})=>id);
    const [article,setArticle] = useState({});
    const getdata = async ()=>{
        try{
          let response = await axios.get(`http://localhost:4350/articles/${Id}`);
          setArticle(response.data);
        }catch(e){
            console.error(e);
          
        }
      }
    useEffect(()=>{
        getdata();
    },[])
  return (
    <div>
     <div className='p-3'>
        <img className='rounded md:w-[400px] mb-4 float-left mr-7' src={article.src} alt="" />
      <div className='p-3'>
      <h1 className='text-4xl bg_text'>{article.title}</h1>
      <p className='text-white  block mt-6 leading-[1.8rem]'>{article.body}</p>
      </div>
     </div>
<Footer/>
    </div>
  )
}

export default Article