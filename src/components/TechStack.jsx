import React from "react";
import { Browser } from "react-kawaii";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import { SiFigma, SiTailwindcss } from "react-icons/si";


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
    const moods = ["blissful", "excited", "happy" ];
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  };
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center  relative text-white text-center overflow-x-hidden">
    
      <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-white opacity-5 rounded-full blur-2xl"></div>
      <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-[120px]"></div>

      <h1 className="text-6xl font-bold relative z-10 mb-10">
        TECH <span className="text-white-400">STACK</span>
      </h1>
      <div className="relative z-10 p-6 bg-pink-600/30 backdrop-blur-md rounded-2xl shadow-lg border border-pink-400/40 max-w-4xl transition-transform transform hover:scale-105 hover:border-white hover:shadow-white/50 flex items-center space-x-10">
       
        <div className="cursor-pointer" onClick={changeMood}>
          <Browser size={250} mood={mood} color="#ffbae1" />
        </div>

       
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white text-xl transition-transform transform hover:scale-110"
            >
              <div className="text-5xl">{tech.icon}</div>
              <p className="text-sm mt-2">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
