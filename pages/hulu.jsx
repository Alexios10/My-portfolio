import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import React from "react";
import huluImg from "../public/assets/projects/hulu.png";

const Hulu = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={huluImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="py-2 font-mono">Hulu App</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A simple &#40;Hulu-clone&#41; video streaming app with nice UI, used
            lazy loading-image from NEXT/IMAGES. API fetching is from the
            moviedatabase.com &#40;TMDB&#41;. The best thing i liked about this
            is the lazy loading-image when switching between different genres.
            And of course the best part about that is to reduce initial load
            time and improve the speed of the website.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            {" "}
            <a
              href="https://hulu-app-virid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            {" "}
            <a
              href="https://github.com/Alexios10/hulu-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
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

export default Hulu;
