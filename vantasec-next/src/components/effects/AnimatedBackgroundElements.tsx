"use client"; // This component uses styles and simple rendering, client component is fine.

import React from 'react';

// Styles for these elements, including 'floating' animation, are in globals.css

const AnimatedBackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Added -z-10 to ensure they are behind content */}
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-purple-500 opacity-20 floating"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-cyan-400 opacity-20 floating"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-purple-500 opacity-20 floating"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-7 h-7 rounded-full bg-cyan-400 opacity-20 floating"
        style={{ animationDelay: '3s' }}
      ></div>
    </div>
  );
};

export default AnimatedBackgroundElements;
