import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Experience as ExperienceType } from '@/types';
import { getCompanyIcon } from '@/utils/experienceHelpers';
import { COLORS } from '@/constants/colors';

/**
 * ExperienceCard Component
 * LinkedIn-style experience card with company logo or icon
 */

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const isPink = index % 2 === 0;
  const gradient = isPink ? 'from-pink-400 to-pink-500' : 'from-purple-400 to-purple-500';
  const borderColor = isPink ? 'border-pink-400' : 'border-purple-400';
  const hoverBorderColor = isPink ? 'hover:border-pink-500' : 'hover:border-purple-500';
  const hoverGlow = isPink ? 'hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]' : 'hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]';
  const iconBg = isPink ? 'bg-gradient-to-br from-pink-100 to-pink-200' : 'bg-gradient-to-br from-purple-100 to-purple-200';
  const iconBorder = isPink ? 'border-pink-300' : 'border-purple-300';
  const iconColor = isPink ? 'text-pink-600' : 'text-purple-600';
  const calendarColor = isPink ? 'text-pink-500' : 'text-purple-500';
  const locationColor = isPink ? 'text-pink-500' : 'text-purple-500';
  const bulletColor = isPink ? 'text-pink-500' : 'text-purple-500';
  const titleHoverColor = isPink ? 'group-hover:text-pink-600' : 'group-hover:text-purple-600';
  const companyColor = isPink ? 'text-pink-600' : 'text-purple-600';

  return (
    <div className={`bg-white border-2 ${borderColor} rounded-xl overflow-hidden shadow-md hover:shadow-xl ${hoverBorderColor} ${hoverGlow} transition-all duration-300 hover:-translate-y-1 group`}>
      {/* Gradient accent bar */}
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="p-5 md:p-6 lg:p-7">
        <div className="flex gap-4 md:gap-5">
          {/* Company Logo/Icon - LinkedIn style */}
          <div className="flex-shrink-0">
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg ${iconBg} flex items-center justify-center border-2 ${iconBorder} overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300`}>
              {experience.logo ? (
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={iconColor}>
                  {getCompanyIcon(index)}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title and Company */}
            <div className="mb-3">
              <h3 className={`text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 transition-colors duration-300 ${titleHoverColor} leading-tight`}>
                {experience.title}
              </h3>
              <p className={`text-base md:text-lg font-semibold ${companyColor} transition-colors duration-300`}>
                {experience.company}
              </p>
            </div>

            {/* Date and Location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 pb-4 border-b border-gray-200">
              <div className={`flex items-center gap-2 text-sm md:text-base font-medium ${isPink ? 'text-pink-600' : 'text-purple-600'}`}>
                <FaCalendarAlt className={`flex-shrink-0 ${calendarColor}`} size={16} />
                <span>{experience.startDate} – {experience.endDate}</span>
              </div>
              <span className={`hidden sm:inline text-lg ${isPink ? 'text-pink-300' : 'text-purple-300'}`}>·</span>
              <div className={`flex items-center gap-2 text-sm md:text-base font-medium ${isPink ? 'text-pink-600' : 'text-purple-600'}`}>
                <FaMapMarkerAlt className={`flex-shrink-0 ${locationColor}`} size={16} />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-3 ${isPink ? 'text-pink-600' : 'text-purple-600'}`}>
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className={`${bulletColor} mt-1 flex-shrink-0 font-bold text-lg`}>•</span>
                    <span className="flex-1">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

