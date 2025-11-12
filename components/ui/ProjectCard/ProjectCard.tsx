import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/types";
import { COLORS } from "@/constants/colors";
import { getProjectIcon, getProjectGradient, getProjectSubtitle } from "@/utils/projectHelpers";

/**
 * ProjectCard Component
 * Displays a project with icon, progress, tech stack, and link
 */

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  desc, 
  url, 
  tech, 
  icon, 
  progress 
}) => {
  const gradient = getProjectGradient(icon);
  const subtitle = getProjectSubtitle(icon);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-black flex flex-col h-full hover:border-pink-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:-translate-y-1">
      {/* Icon Header */}
      <div className={`relative h-40 bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Top Right Icon Badge */}
        <div className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <div className="text-white">
            {getProjectIcon(icon)}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm"></div>
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-bold text-xl md:text-2xl text-black mb-1 group-hover:text-purple-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs text-gray-500 font-medium">
            {subtitle}
          </p>
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5 flex-1">
          {desc}
        </p>

        {/* Progress Section */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-700">Progress</span>
            <span className="text-xs font-bold text-gray-700">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t, i) => (
            <span
              key={i}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors ${COLORS.techBadges[i % COLORS.techBadges.length]}`}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
        >
          View Project
          <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

