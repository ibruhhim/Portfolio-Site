import React from 'react';
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

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
      <h3 className="text-2xl font-bold text-white mb-2">
        <a 
          href={testimonial.site} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-pink-400 transition-colors duration-300 group cursor-pointer"
        >
          <span className="underline decoration-2 underline-offset-4 decoration-pink-400/50 group-hover:decoration-pink-400 transition-colors duration-300">
            {testimonial.name}
          </span>
          <FaLinkedin className="text-pink-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300" size={18} />
          <FaExternalLinkAlt className="text-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={14} />
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

