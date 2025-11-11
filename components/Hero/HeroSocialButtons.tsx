import React from 'react';
import SocialButton from '../ui/SocialButton';

const HeroSocialButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap mt-10 gap-4">
      <SocialButton
        url="https://github.com/ibruhhim"
        label="Github"
        iconUrl="https://github.com"
        className="flex items-center border-2 border-pink-500/50 px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-pink-600 hover:border-pink-600 hover:text-white transition duration-500 cursor-pointer text-white"
      />
      <SocialButton
        url="https://linkedin.com/in/ibrahim-ellahi"
        label="LinkedIn"
        iconUrl="https://linkedin.com"
        className="flex items-center border-2 border-white px-10 py-2 rounded-full tracking-widest uppercase font-bold bg-white text-black hover:bg-purple-600 hover:border-purple-600 hover:text-white transition duration-500 cursor-pointer"
      />
    </div>
  );
};

export default HeroSocialButtons;

