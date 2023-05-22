import React from "react";
import ProjectItem from "./ProjectItem";
import chatAppImg from "../public/assets/projects/chat-app.png";
import airbnbImg from "../public/assets/projects/airbnb-clone.png";
import movixImg from "../public/assets/projects/movix.png";
import foodAppImg from "../public/assets/projects/food-app.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full font-[poppins]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What i have bulit</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Realtime chat app"
            bgImg={chatAppImg}
            projectUrl="/chatApp"
          />

          <ProjectItem
            title="Airbnb clone"
            bgImg={airbnbImg}
            projectUrl="/airbnbClone"
          />

          <ProjectItem
            title="Movies app"
            bgImg={movixImg}
            projectUrl="/movix"
          />

          <ProjectItem
            title="Food app"
            bgImg={foodAppImg}
            projectUrl="/foodApp"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
