"use client";

import React from 'react';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import HeroSocialButtons from './HeroSocialButtons';
import IslamicPattern from '../ui/IslamicPattern';

const Hero = () => {
  return (
    <div id="hero" className="pt-50 relative islamic-gradient-hero w-full min-h-100 pb-36 text-white overflow-hidden">
      <IslamicPattern opacity={0.07} />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-islamic-cream to-transparent pointer-events-none" />

      <div className="relative z-20 flex items-center justify-center gap-36 w-full flex-wrap">
        <HeroImage />
        <div className="flex flex-col items-center">
          <HeroContent />
          <HeroSocialButtons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
