import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../public/assets/projects/food.png";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import huluImg from "../public/assets/projects/hulu.png";
import twitchImg from "../public/assets/projects/twitch.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full font-[poppins]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What i have bulit</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Food-UI" bgImg={propertyImg} projectUrl="/food" />

          <ProjectItem
            title="Crypto App"
            bgImg={cryptoImg}
            projectUrl="/crypto"
          />

          <ProjectItem title="Hulu App" bgImg={huluImg} projectUrl="/hulu" />

          <ProjectItem
            title="Twitch UI"
            bgImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
