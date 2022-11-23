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
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          From the moment i produced &quot;Hello World&quot; in the console of
          my first application, i knew i was hooked into the software
          development. But software development has never been &quot;just a
          job&quot; for me, it&lsquo;s offered an engaging challenge to
          continually learn and improve my skills in creating high-quality
          software. What started with &quot;Hello World&quot; has become a
          full-fledged passion that only gets more exiting. Below you&lsquo;ll
          find projects I&lsquo;ve completed that showcase my skills and general
          background in developing software.
          <p className="py-2 text-gray-600 underline cursor-pointer">
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
