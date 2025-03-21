import React, { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    setHearts(
      [...Array(20)].map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.5
      }))
    );
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce"
          style={{
            top: `${heart.top}%`,
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
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
  );
};

export default FloatingHearts;
