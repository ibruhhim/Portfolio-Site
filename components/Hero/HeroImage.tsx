import React from 'react';
import Image from 'next/image';
import pfp from "@/public/assets/pfp.png";

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0 mx-auto lg:mx-0 lg:justify-self-start">
      <div className="absolute inset-0 rounded-full border-2 border-amber-300/35 shadow-[0_0_40px_rgba(252,211,77,0.2)]" />
      <div className="absolute inset-2 rounded-full border border-emerald-600/50" />
      <div className="absolute w-[88%] h-[88%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden bg-emerald-950 p-1.5 shadow-[0_0_30px_rgba(5,150,105,0.3)]">
        <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-amber-300/25">
          <Image
            src={pfp}
            alt="My Photo"
            className="object-cover object-center w-full h-full scale-125 brightness-110"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
