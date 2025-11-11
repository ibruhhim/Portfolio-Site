"use client";

import { cn } from "@/utils/cn";
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Vortex } from "./VortexBG";
import TechStack from "./TechStack";
import EmailButton from "./EmailButton";
import ResumeLink from "./ResumeLink";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid pb-36 max-w-7xl grid-cols-1 gap-4 auto-rows-[18rem] md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  header,
  icon,
  imgClass,
}: {
  className?: string;
  id?: number;
  img?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  imgClass?: string;
}) => {
  return (
    <div
      className={cn(
        "relative group/bento shadow-input row-span-1 flex rounded-xl items-center p-6 transition shadow-md duration-500 [&>*]:group-hover/bento:translate-x-3 [&_*]:transition [&_*]:duration-400 hover:shadow-purple-500/20 overflow-hidden",
        className,
      )}
    >
      {img && 
      <div className={cn("absolute left-0 rounded-xl w-full overflow-hidden",
        imgClass,
      )}>
          <img
            src={img}
            alt={img}
            className='object-cover object-center w-full'
          />
      </div>
      }
      {id === 2 && <EmailButton />}
      {id === 3 && <Vortex baseHue={200} />}
      {id === 6 && <ResumeLink />}

      {header}
      <div className="flex flex-col z-10 text-wrap justify-center">
        {icon}
        <div className={cn(`flex mt-2 mb-2 font-sans text-xl font-bold`,
          id === 5 && "text-3xl"
          )}>
          {title} {id === 5 && <FaCanadianMapleLeaf className='ml-2' size={40}/>}
        </div>
        <div className={cn(`font-sans text-sm font-normal`,
          id === 5 && "text-md"
        )}>
          {description}
        </div>
      </div>

      {id === 1 && <TechStack />}

    </div>
  );
};
