import React from 'react';

interface Testimonial {
  name: string;
  designation: string;
  quote: string;
  site: string;
}

interface TestimonialContentProps {
  testimonial: Testimonial;
}

const TestimonialContent: React.FC<TestimonialContentProps> = ({ testimonial }) => {
  return (
    <div className="transition-opacity duration-300">
      <h3 className="text-2xl font-bold text-white">
        <a href={testimonial.site} target="_blank" rel="noopener noreferrer">
          {testimonial.name}
        </a>
      </h3>
      <p className="text-sm text-neutral-500">
        {testimonial.designation}
      </p>
      <p className="mt-8 text-lg text-neutral-300">
        {testimonial.quote}
      </p>
    </div>
  );
};

export default TestimonialContent;

