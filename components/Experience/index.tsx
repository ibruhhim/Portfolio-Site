import React from 'react';
import experiences from '@/data/experienceData';
import ExperienceCard from './ExperienceCard';
import SectionHeading from '../ui/SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="w-full py-12 md:py-16 lg:py-20 bg-islamic-cream">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          arabicTitle="الْخُبْرَةُ"
          title="Experience"
          description="My professional journey and the impact I&apos;ve made along the way."
        />
        <div className="px-6 md:px-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 px-5 md:px-6 divide-y divide-gray-200">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
