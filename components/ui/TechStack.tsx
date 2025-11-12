import React from 'react';
import { FaPython, FaJs, FaReact, FaJava } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiTypescript,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si';

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

const TechStack: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 p-4 md:p-6 items-center grow overflow-hidden">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <div key={index} className="flex items-center text-xs md:text-xs bg-gray-200 h-fit shadow-md text-gray-800 font-semibold p-2 md:p-4 rounded-lg md:rounded-xl">
            <Icon size={18} className="mr-1.5 md:mr-2 flex-shrink-0" color={tech.color} />
            <span className="whitespace-nowrap">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;

