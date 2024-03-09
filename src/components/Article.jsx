import React, { useEffect, useState } from "react";
function Article({id}) {
  return (
    <>
      <div
        class="top-container border-b-2 mb-10 md:mb-14 py-5 md:py-10"
        data-astro-cid-wu5dj4rx=""
      >
        {id==1?<main>
          <h1 className="text-white md:text-5xl text-4xl font-bold leading-[3.5rem] md:text-start md:leading-[4rem] text-center w-full py-4">What is the difference between CSR and SSR?</h1>
          <div className="flex items-center gap-5 justify-center md:justify-start">
          <a href="" className="bg-[#454648] text-white px-4 py-1 rounded-xl hover:text-red-600">Life</a>
          <h2 className="text-white text-xl"><span className="mr-10">21 Feb 2024</span><span>10 min read</span></h2>
          </div>
          
        </main>:''}

        {id==2?<main>
          <h1 className="text-white md:text-5xl text-4xl font-bold leading-[3.5rem] md:text-start md:leading-[4rem] text-center w-full py-4">What is the difference JS and React?</h1>
          <div className="flex items-center gap-5 justify-center md:justify-start">
          <a href="" className="bg-[#454648] text-white px-4 py-1 rounded-xl hover:text-red-600">Life</a>
          <h2 className="text-white text-xl"><span className="mr-10">21 Feb 2024</span><span>10 min read</span></h2>
          </div>
          
        </main>:''}
      </div>
    </>
  );
}

export default Article;
