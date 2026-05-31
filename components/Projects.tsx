import React from 'react';
import projects from '@/data/projectData';
import ProjectCard from './ui/ProjectCard';
import SectionHeading from './ui/SectionHeading';

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col justify-center items-center py-16 md:py-20 lg:py-24">
      <SectionHeading
        arabicTitle="مَشارِيعي"
        title={<>What I&rsquo;m <span className="text-emerald-400">Working</span> On</>}
        description="Explore my latest projects and see how I bring ideas to life through code."
        variant="dark"
        className="mb-16 md:mb-20"
      />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-10 max-w-lg mx-auto md:max-w-none md:mx-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              desc={project.desc}
              url={project.url}
              tech={project.tech}
              icon={project.icon}
              progress={project.progress}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
