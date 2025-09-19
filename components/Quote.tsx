import React from 'react'
import pfp2 from '@/public/assets/pfp2.jpeg'
import Image from 'next/image'

const Quote = () => {
  return (
    <div className='bg-black flex flex-wrap items-center justify-evenly w-full p-8 mb-36'>
        <blockquote className="relative text-xl italic border-l-4 border-blue-500 font-extralight pl-4 text-white
                before:content-['“'] after:content-['”'] 
                before:text-3xl after:text-3xl 
                before:mr-1 after:ml-1 text-wrap basis-1/2">
        The world is vast and full of wonder, and every day is a chance to learn, create, and leave a small mark that outlives the moment.
        </blockquote>
        <div className='w-64 h-64 shadow-[0_0_20px_lightblue] border-blue-400 border-4 rounded-full mr-20 overflow-hidden flex justify-self-center items-center'>
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
