import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import React from "react";
import movixImg from "../public/assets/projects/movix.png";

const movix = () => {
  const demo = () => {
    window.open("https://movix-self-nine.vercel.app/", "_blank");
  };

  const code = () => {
    window.open("https://github.com/Alexios10/movix", "_blank");
  };
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={movixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="py-2 font-mono">Movies app</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            Movix is a web application, it allows users to explore the latest
            movies, access detailed information and watch trailers. With a
            responsive design and integration of modern technologies, Movix
            offers a seamless movie browsing experience. By incorporating Redux
            into my project, i significantly improved my state management
            strategy. The centralized state, immutable updates, and well-defined
            actions provided by Redux ensured a predictable flow of data
            throughout my application. Also by adopting SCSS in my project, i
            significantly enhanced my styling efficiency and code organization.
            The use of variables and mixins enabled me to write reusable and
            maintainable stylesheets, while nesting selectors and leveraging
            partials improved readability and modularity.
          </p>
          <button onClick={demo} className="px-8 py-2 mt-4 mr-8">
            Demo
          </button>
          <button onClick={code} className="px-8 py-2 mt-4">
            Code
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default movix;
