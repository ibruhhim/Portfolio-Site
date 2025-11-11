import React from 'react';
import { SocialIcon } from 'react-social-icons';

interface SocialButtonProps {
  url: string;
  label: string;
  className?: string;
  iconUrl?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ 
  url, 
  label, 
  className,
  iconUrl = url 
}) => {
  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className={className}
    >
      <SocialIcon
        className="pointer-events-none mr-2 max-h-8 max-w-8"
        fgColor="currentColor"
        bgColor="transparent"
        url={iconUrl}
      />
      {label}
    </button>
  );
};

export default SocialButton;

