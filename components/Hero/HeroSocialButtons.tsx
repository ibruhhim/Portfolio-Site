import React from 'react';
import SocialButton from '../ui/SocialButton';

const HeroSocialButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap mt-10 gap-4">
      <SocialButton
        url="https://github.com/ibruhhim"
        label="Github"
        iconUrl="https://github.com"
        className="flex items-center border-2 border-emerald-600/80 px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-emerald-800 hover:border-emerald-500 text-white transition duration-500 cursor-pointer"
      />
      <SocialButton
        url="https://linkedin.com/in/ibrahim-ellahi"
        label="LinkedIn"
        iconUrl="https://linkedin.com"
        className="flex items-center border-2 border-amber-300 px-10 py-2 rounded-full tracking-widest uppercase font-bold bg-amber-300/15 text-amber-50 hover:bg-amber-300/30 hover:border-amber-200 hover:text-white transition duration-500 cursor-pointer"
      />
    </div>
  );
};

export default HeroSocialButtons;
