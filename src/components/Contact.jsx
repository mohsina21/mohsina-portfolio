import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub size={24} />, 
    url: "https://github.com/mohsina21",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <FaXTwitter size={24} />, 
    url: "https://twitter.com/notmohsina",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />, 
    url: "https://www.linkedin.com/in/mohsina-parveen-577367203/",
  },
  {
    id: 4,
    name: "Email",
    icon: <FaEnvelope size={24} />, 
    url: "mailto:mohsinaparveen1418@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6 text-white-900 relative">
     
      <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg flex flex-col items-center w-full max-w-xs">
        <h3 className="text-lg font-semibold mb-4 text-white">Connect with me</h3>
        <div className="grid grid-cols-2 gap-4">
          {socialMedia.map((item) => (
            <Tilt
              key={item.id}
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor="#ffbae1"
              className="rounded-lg"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 flex items-center justify-center border-2 text-pink border-white rounded-lg transition-transform transform  hover:scale-125 hover:bg-white hover:text-pink-500 bg-white backdrop-blur-md shadow-lg"
              >
                {item.icon}
              </a>
            </Tilt>
          ))}
        </div>
      </div>

      
      <div className="flex flex-col items-center">
        <a
          href="/Resume-MohsinaParveen.pdf"
          download
          className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition text-lg font-semibold"
        >
          Download Resume
        </a>
      </div>

  
      <footer className="absolute bottom-4 text-white text-sm text-center w-full">
        © 2025 Mohsina Parveen. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
