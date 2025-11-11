import React from 'react';
import Image from 'next/image';
import pfp from "@/public/assets/pfp.jpeg";

const HeroImage: React.FC = () => {
  return (
    <div className='relative w-80 h-80 shadow-[0_0_30px_rgba(236,72,153,0.4)] overflow-hidden rounded-full animate-pulse-slow'>
      <div className='absolute w-80 h-80 right-10 border-pink-500 border-2 rounded-full overflow-hidden flex justify-self-center items-center'>
        <Image
          src={pfp}
          alt="My Photo"
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  );
};

export default HeroImage;

