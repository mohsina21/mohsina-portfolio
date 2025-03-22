import React, { useState } from "react";
import { Browser } from "react-kawaii";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaNpm } from "react-icons/fa";
import { SiFigma, SiTailwindcss } from "react-icons/si";
import Tilt from "react-parallax-tilt";

const techStack = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
  { icon: <FaNpm className="text-red-500" />, name: "NPM" },
  { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
];

const TechStack = () => {
  const [mood, setMood] = useState("blissful");

  const changeMood = () => {
    const moods = ["blissful", "excited", "happy"];
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative text-white text-center overflow-x-hidden p-4 mt-0">
      
      <h1 className="text-6xl font-bold relative z-10 mb-10 hidden sm:block">TECH <span className="text-white-400">STACK</span></h1>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} className=" flex justify-center">
        <div className="relative z-10 p-6 bg-pink-400 backdrop-blur-md rounded-2xl shadow-lg border border-pink-400/40 max-w-4xl transition-transform transform hover:scale-105 hover:border-white hover:shadow-white/50 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10 justify-center">
          <div className="cursor-pointer" onMouseOver={changeMood}>
            <Browser size={200} mood={mood} color="#ffbae1" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8 justify-center items-center">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center text-white text-lg transition-transform transform hover:scale-110">
                <div className="text-4xl sm:text-5xl">{tech.icon}</div>
                <p className="text-xs sm:text-sm mt-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default TechStack;
