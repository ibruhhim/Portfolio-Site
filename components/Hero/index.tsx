"use client";

import React from 'react';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import HeroSocialButtons from './HeroSocialButtons';
import IslamicPattern from '../ui/IslamicPattern';

const Hero = () => {
  return (
    <div id="hero" className="relative islamic-gradient-hero w-full overflow-hidden text-white pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-36">
      <IslamicPattern opacity={0.07} />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-islamic-cream to-transparent pointer-events-none" />

      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-36 w-full px-4 sm:px-6">
        <HeroImage />
        <div className="flex flex-col items-center w-full max-w-xl">
          <HeroContent />
          <HeroSocialButtons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
