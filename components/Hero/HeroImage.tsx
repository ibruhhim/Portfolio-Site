import React from 'react';
import Image from 'next/image';
import pfp from "@/public/assets/pfp.jpeg";

const HeroImage: React.FC = () => {
  return (
    <div className='relative w-80 h-80 shadow-[0_0_30px_rgba(236,72,153,0.4)] rounded-full'>
      <div className='absolute w-80 h-80 right-10 border-2 border-pink-500 rounded-full overflow-hidden flex justify-self-center items-center bg-black p-2'>
        <div className='w-full h-full rounded-full overflow-hidden'>
          <Image
            src={pfp}
            alt="My Photo"
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

