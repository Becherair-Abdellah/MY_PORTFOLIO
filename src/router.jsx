import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./components/Home"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import About from "./components/About"
import Article from "./components/Article"
import Dashboard from "./dashboard/components/Dashboard"
import Overview from "./dashboard/components/Overview"
// import Blog from "./components/Blog"
import Blog_dash from "./dashboard/components/Blog_dash"
import Signin from './dashboard/Signin'
import Email from './dashboard/Email'
import ResetPassword_Dashboard from './dashboard/ResetPassword'
import Webarticles from "./components/Webarticles"
import APIs from "./components/APIs"
import Reactblog from "./components/Reactblog"
import Gitblog from './components/Gitblog'
import Docker from './components/Docker'
import Tailwindcss from './components/Tailwindcss'
import JavaScript from './components/JavaScript'
import Nextjs from './components/Nextjs'
import HtmlCss from './components/HtmlCss'
import Life from './components/Life'
import MySass from "./components/MySass" 
import MyComponent from "./components/MyComponent"
{/* <Routes>
    <Route exact path='/home' element={<Home/>} />
    <Route exact path='/about' element={<About/>} />
    <Route exact path='/projects' element={<Projects/>} />

   
    </Routes> */}
const Router = createBrowserRouter([
    // main app
    {
        path: '/',
        element:
            <App/>
        ,
        children: [
            {index:true, element: <Home/>},
            {path:'/blog', element: <Blog/>,},
            {path:'/blog/web', element: <Webarticles/>,},
            {path:'/blog/apis', element: <APIs/>,},
            {path:'/blog/react', element: <Reactblog/>,},
            {path:'/blog/git', element: <Gitblog/>,},
            {path:'/blog/docker', element: <Docker/>,},
            {path:'/blog/tailwind', element: <Tailwindcss/>,},
            {path:'/blog/javascript', element: <JavaScript/>,},
            {path:'/blog/nextjs', element: <Nextjs/>,},
            {path:'/blog/html+css', element: <HtmlCss/>,},
            {path:'/blog/life', element: <Life/>,},
            {path:'/sass', element: <MySass/>,},
            {path:'/my-components', element: <MyComponent/>,},
            {path:'/blog/frontendexpert', element: <Article id={2} date={`17 MAR 2024`} time={`20 min`} title={`How to become a frontend expert 👌`} tag={'Web'}/>,},
            {path:'/blog/csr+ssr', element: <Article id={1} date={`10 MAR 2024`} time={`10 min`} title={`What is the CSR and SSR in Web And How they work 🤔`} tag={`Web`}/>,},
            {path:'/blog/auth', element: <Article id={1} date={`03 APR 2024`} time={`15 min`} title={`The Authentication and Authorization 🔒🔒`} tag={`Web`}/>,},
            {path:'/contact', element: <Contact/>},
            {path:'/about', element: <About/>},
            // {path:'/login', element: <Signin/>},
            // {path:'/signup', element: <Signup/>},
        ]
        // children: [
        //     {index:true, element: <Home/>,children:[]},
        // ],
    },
    // dashboard
    {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
            { index: true, element: <Overview /> },
            { path: "blogs", element: <Blog_dash /> },
        ],
    },
    { path: "/Dashboard/Signin", element: <Signin /> },
    { path: "/Dashboard/Email", element: <Email /> },

    { path: "/Dashboard/reset_password", element: <ResetPassword_Dashboard /> },
    { path: "/Dashboard/Email", element: <Email /> },
])
export default Router