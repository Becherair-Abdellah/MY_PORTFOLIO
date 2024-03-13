import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
function Footer() {
  const currentYear = new Date().getFullYear();
  const name = "Abdellah";
  return (
    <div className="text-white p-4 py-10  mx-auto md:w-[80%]">
      <div className="md:flex justify-start items-center">
        <div className="flex-1 ">
          <h1 className="text-2xl mb-5">Links</h1>
          <ul>
            <li ><Link to="/MY_PORTFOLIO/blog" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">Blog</Link></li>
            <li ><Link to="/MY_PORTFOLIO/contact" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">Contact</Link></li>
            <li ><Link to="/MY_PORTFOLIO/about" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">About</Link></li>
            {/* <li ><Link to="/ourproduct" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">main Product</Link></li>
            <li ><Link to="/oldproduct" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">Old my project when i learn</Link></li> */}
          </ul>
        </div>
        <div className="w-fit  mb-5 flex-1 mt-10  md:mt-0">
        <h1 className="text-2xl mb-5">Social Media</h1>
          <SocialMedia />
        </div>
        {/* tags  */}
        <div className="mt-8 md:mt-0">
        <h1 className="text-2xl mb-5">Tags</h1>
        <div className="flex flex-1 gap-2 w-[300px] flex-wrap mt-4">
        <Link
            to="/MY_PORTFOLIO/blog/life"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Life
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/html+css"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            HTML+CSS
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/nextjs"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Next js
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/javascript"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            JavaScript
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/tailwind"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Tailwind
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/docker"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Docker
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/git"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Git
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/react"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            React
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/apis"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            APIs
          </Link>
          <Link
            to="/MY_PORTFOLIO/blog/web"
            className="bg-[#454648] px-4 py-1 rounded-xl hover:text-red-600"
          >
            Web
          </Link>
        </div>
        </div>
      </div>
      <p className="text-center mt-8">
        © {currentYear} <strong className="text-TextredColor">{name}</strong>.
        All Rights Reserved.
      </p>
    </div>
  );
}
export default Footer;
