import React from "react";
import { PiFramerLogoFill } from "react-icons/pi";
import { FaHtml5, FaNpm, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiEleventy,
  SiSwiper,
  SiVisualstudiocode,
  SiPostman,
  SiJavascript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsGit, BsGithub } from "react-icons/bs";
import vite from "../assets/vite.svg";
import chart from "../assets/chartjs-logo.svg";
function Tools() {
  return (
    <div className=" mt-[6rem] border-b-2 pb-[4rem] md:pb-[8rem]">
      <h1 className="text-2xl leading-[2rem] font-semibold text-white mb-8">
        Front-End Tools and Techniques
      </h1>

      <div className="flex justify-center flex-wrap gap-5 relative z-[-1]">
        {/* framer motion  */}
        <div className="text-white">
          <PiFramerLogoFill className="xl:text-[100px] text-[50px]" />
        </div>
        {/* html  */}
        <div className="bg-r text-[#e44f26ff]">
          <FaHtml5 className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-[#1172b8ff] ">
          <FaCss3Alt className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-[#00d8ffff]">
          <FaReact className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-[#44a8b3ff]">
          <SiTailwindcss className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-red-800">
          <FaNpm className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-[#e44f26ff]">
          <BsGit className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-white ">
          <BsGithub className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-white">
          <SiNextdotjs className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-[#764abc]">
          <SiRedux className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-white">
          <SiEleventy className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-white ">
          <TbApi className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-[#0080ff]">
          <SiSwiper className="xl:text-[100px] text-[50px]" />
        </div>
        <div className="xl:text-[100px] text-[50px] text-[#0080ff]">
          <SiVisualstudiocode className="text-[50px] xl:text-[100px]" />
        </div>
        <div>
          <SiJavascript className="text-[#ffca28ff] xl:text-[100px] text-[50px]" />
        </div>
        <div className="text-[#e44f26ff]">
          <SiPostman className="xl:text-[100px] text-[50px]" />
        </div>
        <div>
          <img className="xl:w-[100px] w-[50px]" src={vite} alt="" />
        </div>
        <div>
          <img className="xl:w-[100px] w-[50px]" src={chart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tools;
