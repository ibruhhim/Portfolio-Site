"use client";

import React from 'react';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import HeroSocialButtons from './HeroSocialButtons';

const Hero = () => {
  return (
    <div id="hero" className='pt-50 relative bg-black w-full min-h-100 pb-36 text-white'>
      <div className='flex items-center justify-center gap-36 w-full flex-wrap'>
        <HeroImage />
        <div className='flex flex-col items-center'>
          <HeroContent />
          <HeroSocialButtons />
        </div>
      </div>
    </div>
  );
};

export default Hero;

