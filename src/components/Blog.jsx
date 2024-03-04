import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
// import img1 from '../../assets/img2.jpg'
import BoxArticle from "./BoxArticle";
function Blog() {
  return (
    <>
      <div className="">
        {/* tags  */}
        <div className="mt-8 md:mt-0 flex w-[300px] mx-auto justify-center text-white">
          <div className="flex flex-1 text-center  gap-2 flex-wrap mt-4">
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              Life
            </a>
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              HTML+CSS
            </a>
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              Next
            </a>
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              JavaScript
            </a>
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              Tailwind
            </a>
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              Docker
            </a>
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              Git
            </a>
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              React
            </a>
            <a
              href=""
              className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
            >
              APIs
            </a>
          </div>
        </div>
        {/* posts  */}
        <div className="flex gap-5 flex-col py-12 md:grid md:grid-cols-2 lg:grid-cols-3">
          <BoxArticle
            title={`Frontend Engineering`}
            text={`Software Engineer, Frontend Developer Write some articles on LinkedIn about Web Development`}
          />
          <BoxArticle
            title={`Frontend Engineering`}
            text={`Software Engineer, Frontend Developer Write some articles on LinkedIn about Web Development`}
          />
          <BoxArticle
            title={`Frontend Engineering`}
            text={`Software Engineer, Frontend Developer Write some articles on LinkedIn about Web Development`}
          />
          <BoxArticle
            title={`Frontend Engineering`}
            text={`Software Engineer, Frontend Developer Write some articles on LinkedIn about Web Development`}
          />
          <BoxArticle
            title={`Frontend Engineering`}
            text={`Software Engineer, Frontend Developer Write some articles on LinkedIn about Web Development`}
          />
          <BoxArticle
            title={`Frontend Engineering`}
            text={`Software Engineer, Frontend Developer Write some articles on LinkedIn about Web Development`}
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
