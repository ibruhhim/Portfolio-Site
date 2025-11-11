import React from 'react';
import Typewriter from '../ui/Typewriter';

const HeroContent: React.FC = () => {
  return (
    <div className='flex flex-col items-center leading-16 z-5'>
      <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center">
        <span className="text-white text-6xl">Hi! </span>
        <span className="text-white text-6xl">I&apos;m </span>
        <span className="text-pink-400 text-8xl">Ibrahim.</span>
      </h1>
      <p className='text-lg mt-3 text-gray-300'>
        <Typewriter 
          words={[
            'Coding, creating, and caffeinating.', 
            'Building full-stack applications.', 
            'Turning ideas into reality.', 
            'Passionate about technology.'
          ]}
          className="text-pink-400"
          typingSpeed={80}
          deletingSpeed={50}
          pauseTime={2000}
        />
      </p>
    </div>
  );
};

export default HeroContent;

