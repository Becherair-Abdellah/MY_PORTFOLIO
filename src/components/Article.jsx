import React, { useEffect, useState } from "react";
import img from '../assets/p1.jpg'
import img2 from '../assets/request.jpg'
import img3 from '../assets/ssr.jpg'
import img4 from '../assets/browser.jpg'
import img5 from '../assets/csr.jpg'
import img6 from '../assets/vs.jpg'
function Article({id,date,time,title,tag}) {
  useEffect(()=>{
    scrollTo(0,0)
  },[])
  return (
    <>
      <div
        class="top-container  mb-10 md:mb-14 "
        data-astro-cid-wu5dj4rx=""
      >
        {id==1?<main>
          <h1 className="text-white md:text-5xl text-4xl font-bold leading-[3.5rem] md:text-start md:leading-[4rem] text-center w-full py-4">{title}</h1>
          <div className="flex items-center gap-5 justify-center md:justify-start mt-10 border-b-2 py-5 md:py-10">
          <a href="" className="bg-[#454648] text-white px-4 py-1 rounded-xl hover:text-red-600">{tag}</a>
          <h2 className="text-white text-xl"><span className="mr-10">{date}</span><span>{time} read</span></h2>
          </div>
          {/* article  */}
          <div>
            {/* content of articles */}
            <div className="mt-7">
              <h1 className="text-3xl font-bold text-yellow-400">Article Content</h1>
              <ul className="pl-5 py-5 text-white">
                <a href="#overview"><li className='py-1 text-xl underline list-disc'>Overview</li></a>
                <a href="#server"><li className='py-1 text-xl underline list-disc'>Server Side Rendering (SSR)</li></a>
                <a href="#client"><li className='py-1 text-xl underline list-disc'>Client Side Rendering (CSR)</li></a>
                <a href="#comparison"><li className='py-1 text-xl underline list-disc'>Comparison Between CSR and SSR</li></a>
                <a href="#summary"><li className='py-1 text-xl underline list-disc'>Summary</li></a>
              </ul>
            </div>
            {/* content  */}
            <div className="mt-[4rem]">
              <a id="overview"></a>
            <h1 className="text-3xl font-bold text-yellow-400">Overview</h1>
            <div className="mt-[1rem] md:grid grid-cols-2 items-start gap-[3rem]">
              <p className="text-xl text-white">Web applications have been and continue to be in tremendous evolution over time with the emergence of new technologies in this field, always aiming towards one goal: solving complex problems and finding easy, innovative, and scalable solutions. In the past, web applications heavily relied on servers, which were stored in dedicated repositories with cooling systems to maintain their state .</p>
              <div className="mt-[2rem] md:mt-0 w-full h-full object-fill rounded-md">
              <img className=" w-full h-full rounded-md " src={img} alt="" />
              </div>
            </div>
            <p className="text-xl text-white mt-[2rem] md:mt-[4rem]">Simplified methods were used to generate dynamic web pages, where pages were generated by servers and sent directly to the browser for display. This process was known as Server Side Rendering (SSR). With the advancement of web technologies and the emergence of JavaScript frameworks like React.js, Angular.js, and Vue.js, it became possible to execute rendering operations within the browser itself instead of relying entirely on the server. This is known as Client-side rendering, which has framed the role of JavaScript frameworks .</p>



            <a id="server"></a>
            <h1 className="text-3xl mt-[4rem] font-bold text-yellow-400">Server Side Rendering (SSR) :</h1>
            <div className="mt-[1rem] md:grid grid-cols-2 items-start gap-[3rem]">
              <p className="text-xl text-white">This term refers to heavy reliance on the server to generate dynamic web pages. In the event of a request from the client (the browser) to the server, the server will generate a page in response to the client's request. This is known as server-side rendering (SSR) .</p>
              <div className="mt-[2rem] md:mt-0 w-full h-full object-fill rounded-md">
              <img className=" w-full h-full rounded-md " src={img2} alt="" />
              </div>
            </div>
            <p className="text-xl text-white mt-[2rem]">Let's delve a little deeper. The browser requests the page using HTTP (GET METHOD) to receive the page. Let's assume that this page is a list of distinguished students where it's possible to add/edit/delete a student, and also display information about each student, etc. All of this is done using JavaScript. Additionally, this page is styled with a specific formatting, such that the top-scoring student is highlighted in green. This page is associated with CSS files. Upon receiving the request, the server generates an HTML page that links these pages with other files such as JavaScript and CSS. Finally, the page is fully prepared with its interactions. The server also retrieves the necessary data (related to the students) from the database. Oh, finally, the page is ready and the client can interact with it.<br></br><br></br><br></br>
            The real problem is that if you navigate to another page within the same student system, the process starts over: requesting the page, server-side page generation, sending the page. Now the client can interact with the page, causing a large number of requests, negatively impacting the server by increasing the load and consequently slowing down request processing.
            <br></br><br></br>
            This Picture Shows how SSR works : 
            <img className="w-full h-full rounded-md mt-[2rem]" src={img3} alt="" />
            </p>
            <a id="client"></a>
            <h1 className="text-3xl mt-[4rem] font-bold text-yellow-400">Client Side Rendering (CSR) :</h1>
            <div className="mt-[1rem] md:grid grid-cols-2 items-start gap-[3rem]">
              <p className="text-xl text-white">This term refers to heavy reliance on the server to generate dynamic web pages. In the event of a request from the client (the browser) to the server, the server will generate a page in response to the client's request. This is known as server-side rendering (SSR) .<br></br><br></br><br></br>
              This term refers to relying on the client-side browser to generate pages instead of using the server extensively. This principle is achieved through the use of modern JavaScript frameworks such as Vue.js, Angular, and React js .
              </p>
              <div className="mt-[2rem] md:mt-0 w-full h-full object-fill rounded-md">
              <img className=" w-full h-full rounded-md " src={img4} alt="" />
              </div>
            </div>
            <p className="text-xl text-white mt-[2rem]">This technique achieves very high speed in terms of application performance and through user interaction with and displaying the content of the page. Let's delve into how this technique works, taking the aforementioned example for further clarification. When the client requests the desired page, a request (HTTP) is sent. The server generates an empty HTML page containing only basic information about the page such as the title, meta, etc. The client receives the empty page. Now, the browser uses JavaScript frameworks to create the page content and sends API requests to fetch the necessary data (student data). The browser will then create the list of distinguished students with their functions such as editing, deleting, and displaying. Suppose the user wants to view the content of a student, which will be available at another address, for example, www.example.com/students/1/info. The JavaScript frameworks will change the link to the new address using what is known as <strong>routing</strong>. Then, the old content is removed and replaced with the new content, all of which occurs on a single page. This is known as the <strong> Single Page Application (SPA) </strong> .
            <br></br><br></br>
            This Picture Shows how CSR works : 
            <img className="w-full h-full rounded-md mt-[2rem]" src={img5} alt="" />
            </p>
            <a id="comparison"></a>
            <h1 className="text-3xl mt-[4rem] font-bold text-yellow-400">Comparison between CSR and SSR :</h1>
            <div className="mt-[1rem] md:grid grid-cols-2 items-start gap-[3rem]">
              <p className="text-xl text-white">It cannot be said definitively that CSR is better than SSR or vice versa. Each technology has its own specific uses. Sometimes CSR can be disastrous, while SSR can be the opposite, and vice versa. The choice between using CSR or SSR depends on the type of project being developed, which drives us to understand the pros and cons of each technology.
              </p>
              <div className="mt-[2rem] md:mt-0 w-full h-full object-fill rounded-md">
              <img className=" w-full h-full rounded-md " src={img6} alt="" />
              </div>
            </div>
            <p className="text-xl text-white mt-[2rem]">
              <strong className="">Challenges faced by CSR 💪 : </strong> <br></br><br></br>
              <strong>✔️ Delay in initial rendering : </strong> where users may experience delays in displaying the page initially due to the necessary downloading and loading processes of JavaScript files . <br></br><br></br>
              <strong>✔️ Improving SEO:</strong> can be difficult for search engines to understand the content of pages generated by CSR . <br></br><br></br>
              While providing, in return, a fast and seamless user experience ❤️‍🔥.
            </p>
            <p className="text-xl text-white mt-[2rem]">
              <strong className="">Challenges faced by SSR 💪 : </strong> <br></br><br></br>
              <strong>✔️ Server overload:</strong> The server's attempt to generate numerous pages and handle the multitude of requests submitted to it can impose a heavier load on the server, adversely affecting its performance. This may compel companies to purchase powerful resources to ensure performance efficiency.<br></br><br></br>
              
              In return, it provides a distinct experience in terms of improving SEO, whereby search engines can understand the pages generated by the server, allowing the page to appear in the top search results ❤️‍🔥.
            </p>
            <a id="summary"></a>
            <h1 className="text-3xl mt-[4rem] font-bold text-yellow-400">a summary : </h1>
            <p className="text-xl text-white mt-[2rem]">
              <strong>The CSR : </strong> <br></br><br></br>
              💡  Web pages are dynamically generated and displayed within the user's browser using JavaScript . <br></br><br></br>
              💡  This allows for a smooth user experience where content can be updated without reloading the page . <br></br><br></br>
              💡  However, there may be challenges regarding SEO and initial rendering delays. Nevertheless, there are libraries that combine SSR and CSR such as <strong><a href="https://nextjs.org/">Next js</a></strong>, which work to improve SEO.<br></br>
              <br></br><br></br>
              <strong>The SSR : </strong> <br></br><br></br>
              💡  Web pages are generated and rendered dynamically on the server before being sent to the browser . <br></br><br></br>
              💡  This allows for improving SEO and providing a better user experience for the initial display. However, it may result in additional costs for the server . <br></br><br></br>
              Finally, the use of CSR or SSR depends on the application's needs, performance requirements, and user experience, and each can be effectively used according to appropriate scenarios.

              <br></br><br></br>
              Thank you 😉.
            </p>
            </div>
          </div>
        </main>:''}

        {id==2?<main>
          <h1 className="text-white md:text-5xl text-4xl font-bold leading-[3.5rem] md:text-start md:leading-[4rem] text-center w-full py-4">What is The client-side frameworks And how it works</h1>
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
