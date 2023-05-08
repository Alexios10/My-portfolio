import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 font-[poppins]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {" "}
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          I am a junior web developer with a passion for creating engaging and
          user-friendly websites. I have always been interested in technology,
          and after discovering my love for coding during my free time after
          work, I decided to pursue a career in web development. I have
          experience working with HTML, CSS, JavaScript, and various front-end
          frameworks, and I am always eager to learn new technologies and expand
          my skillset.
          <br /> <br /> My goal as a web developer is to create websites that
          not only look great but also provide a seamless user experience. I
          believe that a website should be both visually appealing and easy to
          navigate, and I strive to achieve this in every project that I work
          on. In addition to my technical skills, I am a team player with
          excellent communication skills. I believe that effective communication
          is key to ensuring that a project runs smoothly, and I am always happy
          to collaborate with others to achieve our shared goals. Overall, I am
          excited to continue growing as a web developer and to create
          innovative and impactful websites that make a difference in the world.
          <p className="py-2 text-cyan-600 underline cursor-pointer">
            <a href="#projects">Check out my projects</a>
          </p>
        </div>

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
