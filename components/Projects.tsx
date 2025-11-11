import React from 'react';
import projects from '@/data/projectData';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className='w-full flex flex-col justify-center items-center py-12 md:py-16'>
      <div className='text-center mb-20 w-full'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight'>
          What I&rsquo;m <span className="text-pink-400">Working</span> On
        </h1>
        <p className='text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
          Explore my latest projects and see how I bring ideas to life through code.
        </p>
      </div>
        <div className='w-full max-w-7xl mx-auto'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
