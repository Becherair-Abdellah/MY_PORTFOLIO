import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
// import img1 from '../../assets/img2.jpg'
import BoxArticle from "./BoxArticle";
function Blog() {
  scrollTo(0,0)
  return (
    <>
      <div className="">
        {/* tags  */}
        <div className="flex flex-1 gap-2 text-white w-[300px] flex-wrap mt-4">
        <Link
            to="/blog/life"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Life
          </Link>
          <Link
            to="/blog/html+css"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            HTML+CSS
          </Link>
          <Link
            to="/blog/nextjs"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Next js
          </Link>
          <Link
            to="/blog/javascript"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            JavaScript
          </Link>
          <Link
            to="/blog/tailwind"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Tailwind
          </Link>
          <Link
            to="/blog/docker"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Docker
          </Link>
          <Link
            to="/blog/git"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Git
          </Link>
          <Link
            to="/blog/react"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            React
          </Link>
          <Link
            to="/blog/apis"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            APIs
          </Link>
          <Link
            to="/blog/web"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Web
          </Link>
        </div>
        {/* posts  */}
        <div className="flex gap-5 flex-col py-12 md:grid md:grid-cols-2 lg:grid-cols-3">

<Link to='/blog/csr+ssr'>

<BoxArticle title={`What is the CSR and SSR in Web And How they work 🤔`} text={`The CSR && SSR are two different methods for dynamically displaying web pages we will explain them`} date={`10 MAR 2024`} time={`10 min`}/>
</Link>

<Link to='/blog/frontendexpert'>
<BoxArticle title={`How to become a frontend expert 👌`} text={`In this article, we present the learning path of frontend engineering from the beginner stage to the advanced stage.`}/>
</Link>

<Link to='/blog/jwt'>
<BoxArticle title={`Why we use A JSON Web Token (JWT) 🔒🔒`} text={`In this article, we present  What is JSON Web Token? When do we use it? , JSON Web Token structure , How do JSON Web Tokens work?, and more things.`} date={`17 MAR 2024`} time={`20 min`} isComming={true}/>
</Link>

        </div>
      </div>
    </>
  );
}

export default Blog;
