import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./components/home/Home"
import Blog from "./components/blog/Blog"
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
            {path:'/blog', element: <Blog/>},
            // {path:'/login', element: <Signin/>},
            // {path:'/signup', element: <Signup/>},
        ]
        // children: [
        //     {index:true, element: <Home/>,children:[]},
        // ],
    },
])
export default Router