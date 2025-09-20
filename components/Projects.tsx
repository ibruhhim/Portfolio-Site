import React from 'react'
import projects from '@/data/projectData'
import { InfiniteMovingCards } from './ui/InfinityCard'

const Projects = () => {
  return (
    <div id="projects" className='w-full flex flex-col justify-center font-semibold items-center' >
      <h1 className='text-4xl p-12 font-bold'>What I'm Working On...</h1>
      <div className='w-2/3'>
        <InfiniteMovingCards speed='fast' items={projects}/>
      </div>
    </div>
  )
}

export default Projects
