import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Experience as ExperienceType } from '@/types';
import { COLORS } from '@/constants/colors';
import { getCompanyIcon, getExperienceGradient } from '@/utils/experienceHelpers';

/**
 * ExperienceCard Component
 * Displays a single experience entry with timeline, gradient header, and achievements
 */

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, isLast }) => {
  const gradient = getExperienceGradient(index);

  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      {!isLast && (
        <div className="hidden md:block absolute left-8 md:left-10 top-32 bottom-0 w-0.5 bg-gradient-to-b from-gray-700 via-gray-600 to-transparent"></div>
      )}
      
      <div className="flex gap-6 md:gap-8">
        {/* Timeline dot with icon - hidden on mobile */}
        <div className="hidden md:flex flex-shrink-0">
          <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-xl border-4 border-black transition-all duration-300 hover:scale-110 hover:rotate-3 ${gradient} bg-gradient-to-br`}>
            <div className="text-white">
              {getCompanyIcon(index)}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-8 md:pb-12">
          <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] transition-all duration-300 hover:border-pink-500 hover:-translate-y-1">
            {/* Header with gradient */}
            <div className={`relative h-28 md:h-32 bg-gradient-to-br ${gradient} p-5 md:p-6 lg:p-8`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-white/90 mb-2 md:mb-3">
                    {experience.company}
                  </p>
                </div>
                {/* Icon badge - hidden on mobile */}
                <div className="hidden md:flex w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 items-center justify-center shadow-lg">
                  <div className="text-white">
                    {getCompanyIcon(index)}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"></div>
            </div>

            {/* Content body */}
            <div className="p-4 md:p-6 lg:p-8 xl:p-10">
              {/* Date and location */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 text-sm md:text-sm text-gray-600">
                  <FaCalendarAlt className="text-purple-500 flex-shrink-0" size={16} />
                  <span className="font-semibold">{experience.startDate} – {experience.endDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-pink-500 flex-shrink-0" size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-sm md:text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 md:mb-4">Key Achievements</h4>
                <ul className="space-y-3 md:space-y-4">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex gap-3 md:gap-4 group/item">
                      <div className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full ${COLORS.bulletPoints[idx % COLORS.bulletPoints.length]} bg-${COLORS.bulletPoints[idx % COLORS.bulletPoints.length].split('-')[1]}-50 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform duration-300`}>
                        <span className={`${COLORS.bulletPoints[idx % COLORS.bulletPoints.length]} text-xs font-bold`}>•</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base md:text-base flex-1 group-hover/item:text-gray-900 transition-colors duration-300">
                        {responsibility}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

