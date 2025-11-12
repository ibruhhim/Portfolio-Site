"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Vortex } from "../VortexBG";
import TechStack from "../TechStack";
import EmailButton from "../EmailButton";
import ResumeLink from "../ResumeLink";

interface BentoGridItemProps {
  className?: string;
  id?: number;
  img?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  imgClass?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  id,
  img,
  header,
  icon,
  imgClass,
}) => {
  return (
    <div
      className={cn(
        "relative group/bento shadow-input row-span-1 flex rounded-xl items-center p-8 md:p-6 transition shadow-md duration-500 [&>*]:group-hover/bento:translate-x-3 [&_*]:transition [&_*]:duration-400 hover:shadow-purple-500/20 overflow-hidden",
        className
      )}
    >
      {img && (
        <div className={cn("absolute left-0 rounded-xl w-full overflow-hidden", imgClass)}>
          <img src={img} alt={String(img)} className="object-cover object-center w-full" />
        </div>
      )}
      
      {id === 2 && <EmailButton />}
      {id === 3 && <Vortex baseHue={200} />}
      {id === 6 && <ResumeLink />}

      {header}
      <div className="flex flex-col z-10 text-wrap justify-center">
        {icon}
        <div className={cn("flex mt-2 mb-2 font-sans text-2xl md:text-xl font-bold", id === 5 && "text-4xl md:text-3xl")}>
          {title} {id === 5 && <FaCanadianMapleLeaf className="ml-2" size={40} />}
        </div>
        <div className={cn("font-sans text-base md:text-sm font-normal", id === 5 && "text-lg md:text-md")}>
          {description}
        </div>
      </div>

      {id === 1 && <TechStack />}
    </div>
  );
};

