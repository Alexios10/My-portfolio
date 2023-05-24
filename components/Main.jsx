import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center font-[poppins]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LETS BULID SOMTHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&lsquo;m <span className="text-[#5651e5]">Sattar</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w[70%] m-auto">
            Scroll down or use the links on the top right to view more &#128515;
          </p>
          <div className="flex items-center justify-evenly max-w-[330px] m-auto py-4">
            <a
              className="rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-110 ease-in duration-200"
              href="https://www.linkedin.com/in/sattar-rahim-082188236/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-blue-600" size={25} />
            </a>
            <a
              className="rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-110 ease-in duration-200"
              href="https://github.com/Alexios10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
