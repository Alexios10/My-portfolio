import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import React from "react";
import foodAppImg from "../public/assets/projects/food-app.png";

const foodApp = () => {
  const demo = () => {
    window.open("https://food-app-blue.vercel.app/", "_blank");
  };

  const code = () => {
    window.open("https://github.com/Alexios10/Food-App", "_blank");
  };

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={foodAppImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="font-mono">Food app</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Food App is a single-page web application built with React.js,
            JavaScript, and Tailwind CSS. It was my first project after learning
            the basics of JavaScript and React.js. The app allows users to
            explore different types of food and filter them based on categories
            and price ranges. It features a separate file that efficiently
            fetches images and data to populate the components, ensuring a
            seamless and dynamic user experience. With its clean design and use
            of modern front-end technologies, Food App showcases my skills in
            building responsive user interfaces and handling data fetching in
            React applications.
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
                Javascript
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
                Unsplash images
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

export default foodApp;
