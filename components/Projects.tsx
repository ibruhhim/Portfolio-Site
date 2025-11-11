import React from 'react'
import projects from '@/data/projectData'
import { InfiniteMovingCards } from './ui/InfinityCard'

const Projects = () => {
  return (
    <div id="projects" className='w-full flex flex-col justify-center items-center bg-black py-20' >
      <div className='text-center mb-16 px-6'>
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>What I&rsquo;m Working On</h1>
        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
          Explore my latest projects and see how I bring ideas to life through code.
        </p>
      </div>
      <div className='w-full max-w-7xl px-6'>
        <InfiniteMovingCards speed='fast' items={projects}/>
      </div>
    </div>
  )
}

export default Projects
