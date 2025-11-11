import React from 'react'
import pfp2 from '@/public/assets/pfp2.jpeg'
import Image from 'next/image'

const Quote = () => {
  return (
    <div className='bg-gradient-to-br from-gray-50 to-white flex flex-col md:flex-row justify-center items-center w-full py-20 px-6 md:px-12 gap-12 mb-36'>
      <div className='flex-1 max-w-2xl'>
        <blockquote className="relative text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
          <div className="flex items-start gap-4">
            <span className="text-5xl md:text-6xl font-bold text-pink-500 leading-none mt-2">&ldquo;</span>
            <p className="flex-1 pt-2">
              I&rsquo;m a third-year Computer Science student at UofT with over half a decade of programming experience, passionate about crafting full stack and frontend projects that make a difference.
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <span className="text-5xl md:text-6xl font-bold text-purple-500 leading-none">&rdquo;</span>
          </div>
        </blockquote>
      </div>
      <div className='flex-shrink-0'>
        <div className='w-56 h-56 md:w-72 md:h-72 shadow-2xl border-4 border-pink-500/30 rounded-full overflow-hidden flex items-center justify-center bg-pink-50 p-1'>
          <div className='w-full h-full rounded-full overflow-hidden'>
            <Image
              src={pfp2}
              alt="My Photo"
              className='object-cover w-full h-full object-center'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote
