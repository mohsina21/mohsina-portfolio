import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Navbar = ({ scrollToSection, refs }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = 0.1;
    }
  }, []);

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-pink-300/80 backdrop-blur-md py-3 px-4 flex flex-wrap justify-center items-center gap-3 md:gap-6 shadow-lg rounded-full w-[90%] md:w-fit">
      {[  
        { name: "Home", ref: refs.heroRef },
        { name: "About", ref: refs.aboutRef },
        { name: "Projects", ref: refs.projectsRef },
        { name: "Contact", ref: refs.contactRef },
      ].map((item, index) => (
        <motion.button
          key={index}
          onClick={() => scrollToSection(item.ref)}
          className="px-4 py-2 text-white bg-pink-400/80 rounded-full text-sm md:text-lg font-semibold flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {item.name}
        </motion.button>
      ))}

      {/* Audio Button */}
      <button onClick={toggleAudioIndicator} className="ml-0 md:ml-4 flex items-center space-x-0.5">
        <audio ref={audioElementRef} className="hidden" src="/audio-1.mp3" loop />
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={clsx("w-1 h-4 bg-white rounded-full mx-0.5", {
              "animate-bounce": isIndicatorActive,
            })}
            style={{ animationDelay: `${bar * 0.1}s` }}
          />
        ))}
      </button>
    </nav>
  );
};

export default Navbar;
