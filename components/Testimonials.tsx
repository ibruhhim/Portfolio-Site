"use client";

import React, { useState } from 'react'
import testimonials from '@/data/testimonialData'
import TestimonialCarousel from './ui/TestimonialCarousel'
import TestimonialContent from './ui/TestimonialContent'
import NavigationButtons from './ui/NavigationButtons'

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='bg-black w-full py-20' >
      <div className="mx-auto max-w-sm px-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative flex flex-col sm:flex-row gap-12">
          <TestimonialCarousel 
            testimonials={testimonials} 
            activeIndex={active} 
          />
          <div className="flex flex-col gap-4 justify-between py-4">
            <TestimonialContent testimonial={testimonials[active]} />
            <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
