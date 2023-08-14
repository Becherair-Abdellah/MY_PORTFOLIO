import React from 'react'
import { useState,useEffect } from 'react';
import Footer from '../Footer';
import BoxProduct from '../BoxProduct';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Projects() {
  const [product,setProduct] = useState([]);
  const getdata = async ()=>{
    try{
      let response = await axios.get("http://localhost:4350/product");
      console.log(response)
      setProduct(response.data);
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    getdata();
  },[]);
  return (
    <>
      <h1   className='bg-gr text-white p-6 text-4xl text-center'>My Projects</h1>
      <div className="blogs p-10 mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {product.map((product,idx)=>{
          return(
            <Link to={product.url} key={idx} >
              <BoxProduct name_product={product.name_product} descrp={product.descrp}  img={product.img} />
            </Link>
          )
        })}
      </div>
      <Footer/>
    </>
  )
}

export default Projects
