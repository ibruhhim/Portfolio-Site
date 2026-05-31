import React from 'react';
import Typewriter from '../ui/Typewriter';
import ArabicCalligraphy from '../ui/ArabicCalligraphy';

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center px-4">
      <ArabicCalligraphy
        as="p"
        className="text-5xl sm:text-6xl md:text-7xl text-amber-300 font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] mb-10 md:mb-12"
      >
        ﷽
      </ArabicCalligraphy>

      <ArabicCalligraphy
        as="p"
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-200 font-bold mb-10 leading-loose max-w-xl"
      >
        السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
      </ArabicCalligraphy>

      <h1 className="font-display text-base sm:text-xl md:text-3xl lg:text-5xl font-bold">
        <span className="text-white text-6xl">Hi! </span>
        <span className="text-white text-6xl">I&apos;m </span>
        <span className="text-emerald-400 text-8xl">Ibrahim.</span>
      </h1>

      <p className="text-lg mt-3 text-gray-200">
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
