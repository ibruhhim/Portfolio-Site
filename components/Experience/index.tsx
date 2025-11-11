import React from 'react';
import experiences from '@/data/experienceData';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section id="experience" className="w-full py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Experience
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            My professional journey and the impact I&apos;ve made along the way.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
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
    </section>
  );
};

export default Experience;

