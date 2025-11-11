"use client";

import React from 'react';
import Image from 'next/image';
import pfp from "@/public/assets/pfp.jpeg";
import SocialButton from './ui/SocialButton';
import Typewriter from './ui/Typewriter';

const Hero = () => {
  return (
    <div id="hero" className='pt-50 relative bg-black w-full min-h-100 pb-36 text-white'>
      <div className='flex items-center justify-center gap-36 w-full flex-wrap'>
        <div className='relative w-80 h-80 shadow-[0_0_30px_rgba(236,72,153,0.4)] overflow-hidden rounded-full animate-pulse-slow'>
          <div className='absolute w-80 h-80 right-10 border-pink-500 border-2 rounded-full overflow-hidden flex justify-self-center items-center'>
            <Image
              src={pfp}
              alt="My Photo"
              className='object-cover w-full h-full'
            />
          </div>
        </div>

        <div className='flex flex-col items-center leading-16 z-5'>
          <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center">
            <span className="text-white text-6xl">Hi! </span>
            <span className="text-white text-6xl">I&aposm </span>
            <span className="text-pink-400 text-8xl">Ibrahim.</span>
          </h1>
          <p className='text-lg mt-3 text-gray-300'>
            <Typewriter 
              words={['Coding, creating, and caffeinating.', 'Building full-stack applications.', 'Turning ideas into reality.', 'Passionate about technology.']}
              className="text-pink-400"
              typingSpeed={80}
              deletingSpeed={50}
              pauseTime={2000}
            />
          </p>
          
          <div className="flex flex-wrap mt-10 gap-4">
            <SocialButton
              url="https://github.com/ibruhhim"
              label="Github"
              iconUrl="https://github.com"
              className="flex items-center border-2 border-pink-500/50 px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-pink-600 hover:border-pink-600 hover:text-white transition duration-500 cursor-pointer text-white"
            />
            <SocialButton
              url="https://linkedin.com/in/ibrahim-ellahi"
              label="LinkedIn"
              iconUrl="https://linkedin.com"
              className="flex items-center border-2 border-white px-10 py-2 rounded-full tracking-widest uppercase font-bold bg-white text-black hover:bg-purple-600 hover:border-purple-600 hover:text-white transition duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
