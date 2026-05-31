import React from 'react';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrev, onNext }) => {
  return (
    <div className="flex gap-4 pt-12 md:pt-0">
      <button
        onClick={onPrev}
        className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Previous testimonial"
      >
        <IconArrowLeft className="h-5 w-5 text-black" />
      </button>
      <button
        onClick={onNext}
        className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Next testimonial"
      >
        <IconArrowRight className="h-5 w-5 text-black" />
      </button>
    </div>
  );
};

export default NavigationButtons;
