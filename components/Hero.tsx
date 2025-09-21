"use client";

import React from 'react';
import Image from 'next/image';
import { Spotlight } from './ui/Spotlight'
import { TypewriterEffect} from './ui/TypewriterEffect'
import { SocialIcon } from 'react-social-icons'
import pfp from "@/public/assets/pfp.jpeg";
import { ShootingStars } from './ui/ShootingStar';

const words = [
    {
      text: "Hi!",
      className: "text-white text-6xl",
    },
    {
      text: "I'm",
      className: "text-white text-6xl",
    },
    {
      text: "Ibrahim.",
      className: "text-blue-500 dark:text-blue-500 text-8xl",
    },
  ];

const Hero = () => {
  return (
    <div id="hero" className='pt-50 relative bg-black w-full min-h-100 pb-36 text-white'>
      <ShootingStars starColor='white' starHeight={8} starWidth={8} trailColor='pink' maxSpeed={10}/>
      <div>
        <Spotlight className="-top-40 left-20 sm:left-30 md:left-32 md:-top-20 h-screen" fill="blue" />
        <Spotlight className="top-5 left-40 sm:left-90 h-[80vh] w-[60vw]" fill="pink" />
        <Spotlight className="top-28 left-50 sm:left-160 h-[80vh] w-[80vw]" fill="purple"/>
      </div>

      <div className='flex items-center justify-center gap-36 w-full flex-wrap'>
        <div className='w-72 h-72 sm:w-80 sm:h-80 shadow-[0_0_20px_lightblue] overflow-hidden rounded-full'>
          <div className='w-72 h-72 sm:w-80 sm:h-80 border-blue-400 border-2 rounded-full mr-20 overflow-hidden flex justify-self-center items-center'>
            <Image
              src={pfp}
              alt="My Photo"
              className='object-cover w-full h-full object-left sm:object-center'
            />
          </div>
        </div>

        <div className='flex flex-col items-center leading-16 z-5'>
          <TypewriterEffect
          words={words}
          />
          <p className='text-lg mt-3'>Coding, creating, and caffeinating.</p>
          
          <div className="flex flex-wrap mt-10 gap-4">
            {/* GitHub Link */}
            <button
              onClick={() => window.open("https://github.com/ibruhhim", "_blank")}
              className="flex items-center shadow-[inset_0_0_0_2px_#616467] px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white hover:translate-y-3 dark:text-neutral-200 transition duration-500 cursor-pointer"
            >
              <SocialIcon
                className="pointer-events-none mr-2 max-h-8 max-w-8"
                fgColor="currentColor"
                bgColor="transparent"
                url="https://github.com"
              />
              Github
            </button>

            {/* LinkedIn Link */}
            <button
              onClick={() => window.open("https://linkedin.com/in/ibrahim-ellahi", "_blank")}
              className="flex items-center shadow-[inset_0_0_0_2px_gray] text-black px-10 py-2 rounded-full tracking-widest uppercase font-bold bg-white hover:bg-[#616467] hover:text-black hover:translate-y-3 dark:text-black transition duration-500 cursor-pointer"
            >
              <SocialIcon
                className="pointer-events-none mr-2 max-h-8 max-w-8"
                fgColor="currentColor"
                bgColor="transparent"
                url="https://linkedin.com"
              />
              LinkedIn
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero
