import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-purple-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#edeef3]">
          Sumia Khan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#abb5cd]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#eaecf3] py-4 max-w-[700px]">
          I'm a full-stack developer specailizing in building (and occasionally
          designing) exceptional digital experiences. Currently, I am focused on
          building responsive full-stack web-applications
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-400 hover:border-purple-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
