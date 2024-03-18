import React from 'react'
import BoxArticle from './BoxArticle'
import { Link } from 'react-router-dom'
function LatestBlogPosts() {
  return (
    <div className='py-[3rem]'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-xl text-white'>Latest blog</h1>
        <Link to='/MY_PORTFOLIO/blog' className='font-normal text-red-600 text-lg cursor-pointer hover:underline'>View all posts</Link>
      </div>
      {/* posts  */}
      <div className='flex gap-5 flex-col py-12 md:grid md:grid-cols-2 lg:grid-cols-3'>
<Link to='/MY_PORTFOLIO/blog/csr+ssr'>

        <BoxArticle title={`What is the CSR and SSR in Web And How they work 🤔`} text={`The CSR && SSR are two different methods for dynamically displaying web pages we will explain them`} date={`10 MAR 2024`} time={`10 min`}/>
</Link>
<Link to='/MY_PORTFOLIO/blog/frontendexpert'>
<BoxArticle title={`How to become a frontend expert 👌`} text={`In this article, we present the learning path of frontend engineering from the beginner stage to the advanced stage.`} date={`17 MAR 2024`} time={`20 min`}/>
</Link>

      </div>
    </div>
  )
}

export default LatestBlogPosts
