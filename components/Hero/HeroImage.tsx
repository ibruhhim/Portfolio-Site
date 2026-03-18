import React from 'react';
import Image from 'next/image';
import pfp from "@/public/assets/pfp.png";

const HeroImage: React.FC = () => {
  return (
    <div className='relative w-80 h-80 shadow-[0_0_30px_rgba(16,185,129,0.35)] rounded-full'>
      <div className='absolute w-80 h-80 right-10 border-2 border-emerald-500 rounded-full overflow-hidden flex justify-self-center items-center bg-black p-2'>
        <div className='w-full h-full rounded-full overflow-hidden'>
          <Image
            src={pfp}
            alt="My Photo"
            className='object-cover w-full h-full scale-150'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

