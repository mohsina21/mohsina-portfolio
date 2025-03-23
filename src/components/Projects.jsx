import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    img: "/Harry-1.png",
    title: "PotterPedia",
    desc: "A magical encyclopedia for Harry Potter fans! Explore detailed information about characters, houses, and the wizarding world.",
    url: 'https://dailyprophetonline.vercel.app/'
  },
  {
    img: "/Fashion.png",
    title: "FashionGuide",
    desc: "Your ultimate style companion! Discover the latest fashion trends, styling tips, and outfit inspirations.",
    url: 'https://fashion-guide.vercel.app/'
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-x-hidden">
      <h1 className="text-5xl text-white mb-12 text-center drop-shadow-lg">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.4 } className="w-full">
              <motion.div
                className="border-2 border-white/30 p-6 rounded-2xl shadow-lg text-white text-center bg-white/20 backdrop-blur-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-xl mb-4 shadow-md"
                />
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-sm mt-2">{project.desc}</p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-white-600  text-pink transition transform hover:scale-105"
                >
                  Visit Project
                </a>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
