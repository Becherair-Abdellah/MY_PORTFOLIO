import React from 'react'
import { useState, useEffect } from 'react';
import Footer from '../Footer';
import BoxProduct from '../BoxProduct';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import axios from 'axios';
function Projects() {
  // const [product,setProduct] = useState([]);
  // const getdata = async ()=>{
  //   try{
  //     let response = await axios.get("http://localhost:4350/product");
  //     console.log(response)
  //     setProduct(response.data);
  //   }catch(e){
  //     console.log(e);
  //   }
  // }
  // useEffect(()=>{
  //   getdata();
  // },[]);
  return (
    <>
      <h1 className='bg-gr text-white p-6 text-4xl text-center'>My Projects</h1>
      <div className="blogs p-10 mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">

        <Link to="https://vsbzlb7r6izydvfcmimzmg.on.drv.tw/oops%20orginal%20v1.0.6/html%20file/introapp.html">
          <BoxProduct name_product="Interface of Oops! App" descrp="Programming and designing a login interface
for the Oops application."  img={img1} />
        </Link>

        <Link to="https://vsbzlb7r6izydvfcmimzmg.on.drv.tw/My%20portfolio/port.html">
          <BoxProduct name_product="Short Portfolio" descrp="A simple portfolio created using HTML5 and CSS3, where I focused on crafting a highly appealing" img={img2} />
        </Link>

        <Link to="https://vsbzlb7r6izydvfcmimzmg.on.drv.tw/menu%20bar%20animate/">
          <BoxProduct name_product="Landing Page" descrp="A simple landing page where I focused on enhancing color harmony among each other in this project. This provides an easy and smooth user experience" img={img3} />
        </Link>

        <Link to="https://vsbzlb7r6izydvfcmimzmg.on.drv.tw/app%20Notes/">
          <BoxProduct name_product="Notes App" descrp="I programmed this application using JavaScript, CSS, and HTML, while incorporating
some libraries to import specific icons."  img={img4} />
        </Link>

        <Link to="https://vsbzlb7r6izydvfcmimzmg.on.drv.tw/prjBanks/">
          <BoxProduct name_product="Bank Product" descrp="In this task, I was responsible for transforming a design showcasing
articles related to a
specific bank and the services it offers"  img={img5} />
        </Link>

        <Link to="https://vsbzlb7r6izydvfcmimzmg.on.drv.tw/ToDoList/">
          <BoxProduct name_product="To do List App" descrp="It was developed using JavaScript, an application for tracking and executing tasks to increase productivity"  img={img6} />
        </Link>


      </div>
      <Footer />
    </>
  )
}

export default Projects
