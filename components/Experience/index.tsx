import React from 'react';
import experiences from '@/data/experienceData';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section id="experience" className="w-full py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20 px-6 md:px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-6 tracking-tight">
            Experience
          </h2>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            My professional journey and the impact I&apos;ve made along the way.
          </p>
        </div>

        <div className="relative space-y-16 md:space-y-16 lg:space-y-20 px-6 md:px-4 max-w-xl mx-auto md:max-w-none md:mx-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
          {/* Darkness fade at the end */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

