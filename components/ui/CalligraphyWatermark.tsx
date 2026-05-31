import React from "react";
import ArabicCalligraphy from "./ArabicCalligraphy";

interface CalligraphyWatermarkProps {
  text: string;
  className?: string;
}

const CalligraphyWatermark: React.FC<CalligraphyWatermarkProps> = ({
  text,
  className = "",
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <ArabicCalligraphy
        as="div"
        className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-bold text-amber-400/15 leading-none whitespace-nowrap"
      >
        {text}
      </ArabicCalligraphy>
    </div>
  );
};

export default CalligraphyWatermark;
