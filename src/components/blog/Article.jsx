import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Article({Id}) {
    // const id = 2;
    const [article,setArticle] = useState({id:'',title:''});
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
      <h1>{article.id}</h1>
      <p>{article.title}</p>
    </div>
  )
}

export default Article