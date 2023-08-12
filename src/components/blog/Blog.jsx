import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import img1 from '../../assets/img2.jpg'
import BoxArticle from '../BoxArticle'
import Footer from '../Footer'
// import { getArticles } from './api'
import axios from 'axios'
 function Blog() {
  const [articles,setArticle] = useState([]);
  const getdata = async ()=>{
    try{
      let response = await axios.get("http://localhost:4350/articles");
      setArticle(response.data);
    }catch(e){
      return e;
    }
  }
  useEffect(()=>{
    getdata();
  },[]);
  return (
    <div className=''>
      <h1 className='bg-gr text-white p-6 text-4xl text-center'>Blogs</h1>
      <div className="blogs p-10 mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {articles.map((article,idx)=>{
          return(
            <Link to={`/articles/${article.id}`} key={idx}>
              <BoxArticle title={article.id} text={article.title} srcimg={article.img}/>
            </Link>
          )
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Blog
