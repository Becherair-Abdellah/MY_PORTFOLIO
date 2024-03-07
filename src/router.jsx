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
        path: '/',
        element:
            <App/>
        ,
        children: [
            {index:true, element: <Home/>},
            {path:'/blog', element: <Blog/>,},
            {path:'/blog/article', element: <Article/>,},
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