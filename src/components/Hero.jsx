import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HumanCat } from "react-kawaii";

const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub size={25} />, 
    url: "https://github.com/mohsina21",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <FaXTwitter size={25} />, 
    url: "https://twitter.com/notmohsina",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin size={25} />, 
    url: "https://www.linkedin.com/in/mohsina-parveen-577367203/",
  },
];

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  relative text-white text-center ">
      
      <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-white opacity-5 rounded-full blur-2xl"></div>
      
     
      <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4 font-body">Hello, I'm</h2>
        <h1 className="text-7xl font-extrabold font-body drop-shadow-lg">MOHSINA PARVEEN </h1>
      </div>
      
     
      
      <div className="flex space-x-6 mt-5 relative z-10">
        {socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-white rounded-lg transition-transform transform hover:scale-125 hover:bg-white hover:text-pink-500"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
