import React from 'react';

interface AwardCardProps {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  issuer,
  year,
  description,
  icon,
  index = 0,
}) => {
  return (
    <div className="bg-white border border-gray-200 flex flex-col gap-4 text-black shadow-sm rounded-xl p-8 hover:shadow-lg transition-all max-w-sm">
      <div className="flex justify-center">
        {icon}
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-600 font-medium">
          {issuer}
        </p>
        <p className="text-xs text-purple-600 font-semibold uppercase tracking-wide">
          {year}
        </p>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm leading-6 text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;

