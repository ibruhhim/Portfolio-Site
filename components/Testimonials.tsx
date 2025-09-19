import React from 'react'
import { AnimatedTestimonials } from './ui/AnimatedTestimonials'
import testimonials from '@/data/testimonialData'

const Testimonials = () => {
  return (
    <div className='bg-black w-full'>
      <AnimatedTestimonials testimonials={testimonials}/>
    </div>
  )
}

export default Testimonials
