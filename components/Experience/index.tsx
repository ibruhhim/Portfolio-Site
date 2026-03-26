import React from 'react';
import experiences from '@/data/experienceData';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section id="experience" className="w-full py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-12 px-6 md:px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            My professional journey and the impact I&apos;ve made along the way.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-linear-to-r from-transparent via-emerald-700/50 to-transparent"></div>
        </div>

        <div className="px-6 md:px-4 max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

