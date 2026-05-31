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
        return 'from-amber-300 via-amber-400 to-amber-500';
      case 'silver':
        return 'from-gray-300 via-gray-400 to-gray-500';
      case 'bronze':
        return 'from-[#e8a86a] via-[#cd7f32] to-[#8b4513]';
      default:
        return 'from-amber-300 via-amber-400 to-amber-500';
    }
  };

  const getBorderColor = () => {
    switch (medalType) {
      case 'gold':
        return 'border-amber-300/30';
      case 'silver':
        return 'border-gray-400/30';
      case 'bronze':
        return 'border-[#cd7f32]/40';
      default:
        return 'border-amber-300/30';
    }
  };

  const getRingColor = () => {
    switch (medalType) {
      case 'gold':
        return 'ring-amber-300/30';
      case 'silver':
        return 'ring-gray-400/30';
      case 'bronze':
        return 'ring-[#cd7f32]/40';
      default:
        return 'ring-amber-300/30';
    }
  };

  const getHoverGlow = () => {
    switch (medalType) {
      case 'gold':
        return 'hover:shadow-[0_0_30px_rgba(252,211,77,0.5)]';
      case 'silver':
        return 'hover:shadow-[0_0_30px_rgba(156,163,175,0.5)]';
      case 'bronze':
        return 'hover:shadow-[0_0_30px_rgba(205,127,50,0.55)]';
      default:
        return 'hover:shadow-[0_0_30px_rgba(252,211,77,0.5)]';
    }
  };

  const getHoverBorder = () => {
    switch (medalType) {
      case 'bronze':
        return 'hover:border-[#cd7f32]/60';
      default:
        return 'hover:border-amber-300/40';
    }
  };

  return (
    <div className={`bg-emerald-950 border-2 ${getBorderColor()} flex flex-col gap-6 text-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 w-full sm:max-w-sm hover:-translate-y-2 ${getHoverBorder()} ${getHoverGlow()}`}>
      <div className="flex justify-center">
        <div className={`relative w-20 h-20 rounded-full bg-linear-to-br ${getGradient()} flex items-center justify-center shadow-xl transform transition-transform duration-300 hover:scale-110 hover:rotate-6 ring-2 ${getRingColor()}`}>
          <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm"></div>
          <div className="relative z-10 text-white transform scale-125">
            {icon}
          </div>
        </div>
      </div>

      <div className="text-center space-y-3">
        <h3 className="font-display text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-base md:text-sm text-gray-300 font-semibold">
          {issuer}
        </p>
        <div className={`inline-block px-4 py-1.5 rounded-full bg-linear-to-r ${getGradient()} text-white text-sm md:text-xs font-bold uppercase tracking-wider shadow-md`}>
          {year}
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 mt-2">
        <p className="text-base md:text-sm leading-6 text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
