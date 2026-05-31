"use client";

import React, { useState } from 'react'
import testimonials from '@/data/testimonialData'
import TestimonialCarousel from './ui/TestimonialCarousel'
import TestimonialContent from './ui/TestimonialContent'
import NavigationButtons from './ui/NavigationButtons'
import IslamicPattern from './ui/IslamicPattern'
import SectionHeading from './ui/SectionHeading'

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-emerald-950 w-full py-20 border-t border-amber-300/20 overflow-hidden">
      <IslamicPattern opacity={0.04} />
      <div className="relative mx-auto max-w-sm px-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <SectionHeading
          arabicTitle="شَهَادَات"
          title="What People Say"
          variant="dark"
          className="mb-12"
        />
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
