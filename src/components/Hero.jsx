import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HumanCat } from "react-kawaii";

const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub size={30} />, 
    url: "https://github.com/mohsina21",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <FaXTwitter size={30} />, 
    url: "https://twitter.com/notmohsina",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />, 
    url: "https://www.linkedin.com/in/mohsina-parveen-577367203/",
  },
];

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 to-pink-500 relative text-white text-center overflow-x-hidden">
      
      <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-white opacity-5 rounded-full blur-2xl"></div>
      
     
      <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4 font-body">Hello, I'm</h2>
        <h1 className="text-7xl font-extrabold font-body drop-shadow-lg">MOHSINA PARVEEN </h1>
      </div>
      
     
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              opacity: Math.random() * 0.5 + 0.5,
              filter: "blur(2px)"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              className="w-10 h-10 drop-shadow-lg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
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
