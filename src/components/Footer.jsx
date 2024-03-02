import SocialMedia from "./home/SocialMedia";
function Footer() {
  const currentYear = new Date().getFullYear();
  const name = "Abdellah";
  return (
    <div className="text-white p-4 py-10  mx-auto md:w-[80%]">
      <div className="md:flex justify-start items-center">
        <div className="flex-1 ">
          <h1 className="text-2xl mb-5">Links</h1>
          <ul>
            <li ><a href="/blog" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">Blog</a></li>
            <li ><a href="/talks" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">Talks</a></li>
            <li ><a href="/contact" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">Contact</a></li>
            <li ><a href="/about" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">About</a></li>
            <li ><a href="/ourproduct" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">main Product</a></li>
            <li ><a href="/oldproduct" className="hover:text-red-600 cursor-pointer text-lg mb-1 w-fit block">Old my project when i learn</a></li>
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
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            Life
          </a>
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            HTML+CSS
          </a>
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            Next
          </a>
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            JavaScript
          </a>
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            Tailwind
          </a>
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            Docker
          </a>
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            Git
          </a>
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            React
          </a>
          <a
            href=""
            className="bg-gray-600 px-4 py-1 rounded-xl hover:text-red-600"
          >
            APIs
          </a>
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
