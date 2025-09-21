"use client";

import { cn } from "@/utils/cn";
import { FaPython, FaJs, FaReact, FaJava, FaArrowUp, FaCanadianMapleLeaf, FaRegClone } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiTypescript,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si';
import { Vortex } from "./VortexBG";

const technologies = [
  { name: 'Python', icon: FaPython, color: '#306998' },
  { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
];

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
        "relative group/bento shadow-input row-span-1 flex rounded-xl items-center p-6 transition shadow-md duration-500 [&>*]:group-hover/bento:translate-x-3 [&_*]:transition [&_*]:duration-400 hover:shadow-2xl overflow-hidden",
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
      {id == 2 &&
      <button
        className="flex p-4 px-8 h-24 justify-center cursor-pointer items-center rounded-2xl shadow-xl m-5 text-md bg-gray-900 text-white font-semibold"
        onClick={() => navigator.clipboard.writeText("ibrahim.ellahi@mail.utoronto.ca")}
      >
      <FaRegClone className="mr-2" size={15} /> Copy Email
      </button>
      }

      {id == 3 &&
      <Vortex baseHue={200} />

      }

      {id == 6 &&
      
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex shadow-lg justify-center items-center px-12 py-6 md:px-16 md:py-8 bg-gray-900 text-white font-semibold text-xl rounded-3xl"
      >
      <FaArrowUp size={20} />
      </a>
      }

      {header}
      <div className="flex flex-col z-10 text-wrap justify-center">
        {icon}
        <div className={cn(`flex mt-2 mb-2 font-sans text-xl font-bold`,
          id == 5 && "text-3xl"
          )}>
          {title} {id == 5 && <FaCanadianMapleLeaf className='ml-2' size={40}/>}
        </div>
        <div className={cn(`font-sans text-sm font-normal`,
          id == 5 && "text-md"
        )}>
          {description}
        </div>
      </div>

   
    {id == 1 && 
    <div className="flex flex-wrap gap-4 p-6">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <div key={index} className="flex items-center text-xs bg-gray-200 h-fit shadow-md text-gray-800 font-semibold p-4 rounded-xl">
            <Icon size={25} className="mr-2" color={tech.color} />
            <span>{tech.name}</span>
          </div>
        );
      })}
    </div>
    }

    </div>
  );
};
