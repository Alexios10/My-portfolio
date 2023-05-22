import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import React from "react";
import airbnbImg from "../public/assets/projects/airbnb-clone.png";

const airbnb = () => {
  const demo = () => {
    window.open("https://rent-rom.vercel.app/", "_blank");
  };

  const code = () => {
    window.open("https://github.com/Alexios10/RentRom", "_blank");
  };

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={airbnbImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="font-mono">Airbnb clone</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="my-2">
            RentRom is a full-stack web application it offers users a platform
            to discover and book their ideal rental experiences. The app
            includes features such as user authentication, rental search and
            filtering, booking management, and detailed rental listings. With a
            responsive design and integration of modern technologies, RentRom
            provides users with a seamless and personalized rental experience. I
            learned a lot in this project specially Typescript which helped me
            catch error in build time and also explains what exactly the error
            is which makes it easy for me to look for solutions. Its a fantastic
            language and im loving it already and will be working with it a lot
            in my future projects.
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
            <p className="font-bold pb-2">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS 13
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mongo DB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Prisma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextAuth.js
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

export default airbnb;
