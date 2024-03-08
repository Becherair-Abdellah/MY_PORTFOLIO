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
{/* <Routes>
    <Route exact path='/MY_PORTFOLIO/home' element={<Home/>} />
    <Route exact path='/MY_PORTFOLIO/about' element={<About/>} />
    <Route exact path='/MY_PORTFOLIO/projects' element={<Projects/>} />

   
    </Routes> */}
const Router = createBrowserRouter([
    // main app
    {
        path: '/MY_PORTFOLIO/',
        element:
            <App/>
        ,
        children: [
            {index:true, element: <Home/>},
            {path:'/MY_PORTFOLIO/blog', element: <Blog/>,},
            {path:'/MY_PORTFOLIO/blog/article', element: <Article/>,},
            {path:'/MY_PORTFOLIO/contact', element: <Contact/>},
            {path:'/MY_PORTFOLIO/about', element: <About/>},
            // {path:'/login', element: <Signin/>},
            // {path:'/signup', element: <Signup/>},
        ]
        // children: [
        //     {index:true, element: <Home/>,children:[]},
        // ],
    },
    // dashboard
    {
        path: "/MY_PORTFOLIO/Dashboard",
        element: <Dashboard />,
        children: [
            { index: true, element: <Overview /> },
            { path: "blogs", element: <Blog_dash /> },
        ],
    },
    { path: "/MY_PORTFOLIO/Dashboard/Signin", element: <Signin /> },
    { path: "/MY_PORTFOLIO/Dashboard/Email", element: <Email /> },

    { path: "/MY_PORTFOLIO/Dashboard/reset_password", element: <ResetPassword_Dashboard /> },
    { path: "/MY_PORTFOLIO/Dashboard/Email", element: <Email /> },
])
export default Router