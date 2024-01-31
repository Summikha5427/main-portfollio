import React from "react";
import HTML from "../assets/html.png"
import JavaScript from "../assets/javascript.png";
import TailwindCSS from "../assets/tailwind.png";
import ReactImg from "../assets/react.png";
import Github from "../assets/github.png";
import Node from "../assets/node.png";
import MongoDB from "../assets/mongo.png";
import Express from "../assets/express.png";
import Docker from "../assets/docker.png";
import Jenkins from "../assets/jenkins.png";
import SonarQube from "../assets/Sonarqube.png";
// import Devops from "../assets/Devopss.png";
import Devops from "../assets/Devopss.jpg";
import "../index.css";


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pureple-400 '>Skills</p>
              <p className='py-4'>..These are few Technologies I have worked with.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MongoDB} alt="HTML icon" />
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
                  <p className='my-4'>Express</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-22 mx-auto h-20' src={Devops} alt="HTML icon" />
                  <p className='my-4'>Devops</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                  <p className='my-4'>Github</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={TailwindCSS} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Jenkins} alt="HTML icon" />
                  <p className='my-4'>Jenkins</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                  <p className='my-4'>Docker</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SonarQube} alt="HTML icon" />
                  <p className='my-4'>SonarQube</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;