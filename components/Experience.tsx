import React from 'react';
import experiences from '@/data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Experience</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I&aposve made along the way.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-transparent"></div>
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-pink-500 to-pink-700' 
                      : 'bg-gradient-to-br from-purple-500 to-purple-700'
                  }`}>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all hover:border-pink-200">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-1">
                          {experience.title}
                        </h3>
                        <p className={`text-lg font-semibold mb-2 ${
                          index % 2 === 0 ? 'text-pink-600' : 'text-purple-600'
                        }`}>
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 font-medium">
                          {experience.startDate} – {experience.endDate}
                        </p>
                        <p className="text-sm text-gray-500">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mt-6">
                      {experience.responsibilities.map((responsibility, idx) => {
                        const colors = ['text-pink-500', 'text-purple-500', 'text-violet-500'];
                        return (
                          <li key={idx} className="flex gap-3">
                            <span className={`${colors[idx % colors.length]} mt-1.5 flex-shrink-0`}>•</span>
                            <span className="text-gray-700 leading-relaxed text-sm">
                              {responsibility}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

