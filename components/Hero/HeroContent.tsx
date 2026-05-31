import React from 'react';
import Typewriter from '../ui/Typewriter';
import ArabicCalligraphy from '../ui/ArabicCalligraphy';

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center px-2 sm:px-4 w-full min-w-0">
      <ArabicCalligraphy
        as="p"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-amber-300 font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] mb-6 sm:mb-8 md:mb-12 w-full text-center leading-none"
      >
        ﷽
      </ArabicCalligraphy>

      <ArabicCalligraphy
        as="p"
        className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-200 font-bold mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xs sm:max-w-md md:max-w-xl px-1"
      >
        السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
      </ArabicCalligraphy>

      <h1 className="font-display font-bold leading-tight">
        <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Hi! </span>
        <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">I&apos;m </span>
        <span className="text-emerald-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Ibrahim.</span>
      </h1>

      <p className="text-sm sm:text-base md:text-lg mt-3 text-gray-200 max-w-xs sm:max-w-md">
        <Typewriter
          words={[
            'Coding, creating, and caffeinating.',
            'Building full-stack applications.',
            'Turning ideas to life.',
            'Passionate about technology.',
          ]}
          className="text-emerald-400"
          typingSpeed={80}
          deletingSpeed={50}
          pauseTime={2000}
        />
      </p>
    </div>
  );
};

export default HeroContent;
