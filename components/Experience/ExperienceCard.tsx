import React from 'react';
import Image from 'next/image';
import { Experience as ExperienceType } from '@/types';
import { getCompanyIcon } from '@/utils/experienceHelpers';

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div className="flex gap-4 md:gap-5 py-5 md:py-6">
      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        {experience.logo ? (
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-emerald-700">{getCompanyIcon(index)}</div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 leading-tight">
          {experience.title}
        </h3>
        <p className="text-base text-emerald-800 font-medium mt-0.5">
          {experience.company}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {experience.startDate} – {experience.endDate} · {experience.location}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
