import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import React from "react";
import chatAppImg from "../public/assets/projects/chat-app.png";

const chatApp = () => {
  const demo = () => {
    window.open("https://chat-app-beta-navy.vercel.app/login", "_blank");
  };

  const code = () => {
    window.open("https://github.com/Alexios10/chat-app", "_blank");
  };

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={chatAppImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h1 className="font-mono">Realtime chat app</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            FriendZone is a full-stack web application it provides users with a
            platform to connect and socialize with friends. The app features
            user authentication, friend management, and real-time chat
            functionality. With a responsive design and seamless integration of
            modern technologies, FriendZone offers an engaging and user-friendly
            experience for fostering meaningful connections. I learned a lot
            about Typescript since its my first time using it in a real project
            like this one. When i needed help i used google, Stackoverflow and
            other web developer communities. I used them a lot for this project.
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
                Upstash Redis
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
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

export default chatApp;
