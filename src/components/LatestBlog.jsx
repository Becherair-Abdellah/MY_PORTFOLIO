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
        <Link to='/MY_PORTFOLIO/blog/article/1'>

        <BoxArticle title={`Frontend Engineering`} text={`Software Engineer, Frontend Developer Write some articles on LinkedIn about Web Development`}/>
        </Link>

<Link to='/MY_PORTFOLIO/blog/article/2'>

        <BoxArticle title={`Frontend Engineering`} text={`Software Engineer, Frontend Developer Write some articles on LinkedIn about Web Development`}/>
</Link>


      </div>
    </div>
  )
}

export default LatestBlogPosts
