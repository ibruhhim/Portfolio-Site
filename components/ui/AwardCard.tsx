import React from 'react';

interface AwardCardProps {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  medalType?: 'gold' | 'silver' | 'bronze';
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  issuer,
  year,
  description,
  icon,
  medalType = 'gold',
}) => {
  const getGradient = () => {
    switch (medalType) {
      case 'gold':
        return 'from-yellow-400 via-yellow-500 to-yellow-600';
      case 'silver':
        return 'from-gray-300 via-gray-400 to-gray-500';
      case 'bronze':
        return 'from-amber-600 via-amber-700 to-amber-800';
      default:
        return 'from-yellow-400 via-yellow-500 to-yellow-600';
    }
  };

  const getBorderColor = () => {
    switch (medalType) {
      case 'gold':
        return 'border-yellow-500/30';
      case 'silver':
        return 'border-gray-400/30';
      case 'bronze':
        return 'border-amber-600/30';
      default:
        return 'border-yellow-500/30';
    }
  };

  const getHoverGlow = () => {
    switch (medalType) {
      case 'gold':
        return 'hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]';
      case 'silver':
        return 'hover:shadow-[0_0_30px_rgba(156,163,175,0.5)]';
      case 'bronze':
        return 'hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]';
      default:
        return 'hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]';
    }
  };

  return (
    <div className={`bg-black border-2 ${getBorderColor()} flex flex-col gap-6 text-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 w-full sm:max-w-sm hover:-translate-y-2 hover:border-pink-500/50 ${getHoverGlow()}`}>
      {/* Icon with gradient background */}
      <div className="flex justify-center">
        <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${getGradient()} flex items-center justify-center shadow-xl transform transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
          <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm"></div>
          <div className="relative z-10 text-white transform scale-125">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">{title}</h3>
        <p className="text-sm text-gray-300 font-semibold">
          {issuer}
        </p>
        <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${getGradient()} text-white text-xs font-bold uppercase tracking-wider shadow-md`}>
          {year}
        </div>
      </div>

      {/* Description */}
      <div className="border-t border-gray-700 pt-6 mt-2">
        <p className="text-sm leading-6 text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
