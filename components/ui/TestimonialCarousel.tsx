import React from 'react';

interface Testimonial {
  src: string;
  name: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  activeIndex: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  testimonials, 
  activeIndex 
}) => {
  return (
    <div>
      <div className="relative h-50 w-50">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.src}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-30 z-0'
            }`}
          >
            <img
              src={testimonial.src}
              alt={testimonial.name}
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

