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
  const isPrimary = index % 2 === 0;
  const gradient = isPrimary ? 'from-emerald-600 to-emerald-700' : 'from-amber-500 to-amber-600';
  const borderColor = isPrimary ? 'border-emerald-600' : 'border-amber-500';
  const hoverBorderColor = isPrimary ? 'hover:border-emerald-700' : 'hover:border-amber-600';
  const hoverGlow = isPrimary ? 'hover:shadow-[0_0_30px_rgba(5,150,105,0.5)]' : 'hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]';
  const iconBg = isPrimary ? 'bg-gradient-to-br from-emerald-100 to-emerald-300' : 'bg-gradient-to-br from-amber-100 to-amber-300';
  const iconColor = isPrimary ? 'text-emerald-700' : 'text-amber-700';
  const calendarColor = isPrimary ? 'text-emerald-600' : 'text-amber-600';
  const locationColor = isPrimary ? 'text-emerald-600' : 'text-amber-600';
  const bulletColor = isPrimary ? 'text-emerald-600' : 'text-amber-600';
  const titleHoverColor = isPrimary ? 'group-hover:text-emerald-700' : 'group-hover:text-amber-700';
  const companyColor = isPrimary ? 'text-emerald-700' : 'text-amber-700';

  return (
    <div className={`bg-white border-2 ${borderColor} rounded-xl overflow-hidden shadow-md hover:shadow-xl ${hoverBorderColor} ${hoverGlow} transition-all duration-300 hover:-translate-y-1 group`}>
      {/* Gradient accent bar */}
      <div className={`h-1.5 bg-linear-to-r ${gradient}`}></div>
      
      <div className="p-5 md:p-6 lg:p-7">
        <div className="flex gap-4 md:gap-5">
          {/* Company Logo/Icon - LinkedIn style */}
          <div className="shrink-0">
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg ${iconBg} flex items-center justify-center overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300`}>
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
              <div className={`flex items-center gap-2 text-sm md:text-base font-medium ${isPrimary ? 'text-emerald-700' : 'text-amber-700'}`}>
                <FaCalendarAlt className={`shrink-0 ${calendarColor}`} size={16} />
                <span>{experience.startDate} – {experience.endDate}</span>
              </div>
              <span className={`hidden sm:inline text-lg ${isPrimary ? 'text-emerald-300' : 'text-amber-300'}`}>·</span>
              <div className={`flex items-center gap-2 text-sm md:text-base font-medium ${isPrimary ? 'text-emerald-700' : 'text-amber-700'}`}>
                <FaMapMarkerAlt className={`shrink-0 ${locationColor}`} size={16} />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-3 ${isPrimary ? 'text-emerald-700' : 'text-amber-700'}`}>
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className={`${bulletColor} mt-1 shrink-0 font-bold text-lg`}>•</span>
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

