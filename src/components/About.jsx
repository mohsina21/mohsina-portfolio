import React, { useState } from "react";
import { Cat } from "react-kawaii";

const About = () => {
  const [mood, setMood] = useState("blissful");

  const changeMood = () => {
    const moods = ["blissful", "excited", "happy", "shocked", "sad", "ko" ];
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  relative text-white text-center overflow-x-hidden">
     
      <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-white opacity-5 rounded-full blur-2xl"></div>
      <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-[120px]"></div>
      <h2 className="text-4xl font-bold font-body text-white drop-shadow-lg p-5">About Me</h2>

      <div className="relative z-10 p-6 bg-pink-400 backdrop-blur-md rounded-2xl shadow-lg border border-pink-500/40 max-w-3xl transition-transform transform hover:scale-105 hover:border-white hover:shadow-white/50 flex items-center space-x-10">

        <div className="cursor-pointer" onClick={changeMood}>
          <Cat size={250} mood={mood} color="#ffbae1" />
        </div>
        
        <div className="text-left">
          
          <p className="text-lg text-white mt-4">
            Hi! I'm <span className="font-bold">Mohsina Parveen</span>, a passionate Front-End Developer and a dedicated student with a keen
            interest in crafting intuitive and visually appealing web experiences.
            I enjoy transforming ideas into interactive, user-friendly designs
            using technologies like HTML, CSS, JavaScript, and React. I'm always
            eager to learn new technologies and improve my coding abilities. Feel
            free to check out my work, and let's connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
