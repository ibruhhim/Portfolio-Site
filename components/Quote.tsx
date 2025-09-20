import React from 'react'
import pfp2 from '@/public/assets/pfp2.jpeg'
import Image from 'next/image'

const Quote = () => {
  return (
    <div className='bg-black flex flex-wrap justify-center items-center w-full p-8 gap-8 mb-36'>
        <blockquote className="relative text-lg italic border-l-4 border-blue-500 font-extralight pl-4 text-white
                before:content-['“'] after:content-['”']
                before:text-3xl before:font-bold after:text-3xl after:font-bold
                before:mr-1 after:ml-1 text-wrap basis-1/2 leading-8 grow md:grow-0">
        I'm a third-year Computer Science student at UofT with 5+ years of programming experience, passionate about crafting full stack and frontend projects that make a difference.
        </blockquote>
        <div className='w-48 h-48 sm:w-64 sm:h-64 shadow-[0_0_20px_lightblue] border-blue-400 border-4 rounded-full mr-20 overflow-hidden flex justify-self-center items-center'>
            <Image
            src={pfp2}
            alt="My Photo"
            className='object-cover w-full h-full object-right'
            />
        </div>
    </div>
  )
}

export default Quote
