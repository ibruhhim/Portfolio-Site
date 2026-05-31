import React from "react";
import ArabicCalligraphy from "./ArabicCalligraphy";

interface IslamicDividerProps {
  className?: string;
}

const IslamicDivider: React.FC<IslamicDividerProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 px-6 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 max-w-xs bg-linear-to-r from-transparent via-amber-500/50 to-amber-500/70" />
      <ArabicCalligraphy className="text-2xl md:text-3xl text-amber-500/80 leading-none">
        ۩
      </ArabicCalligraphy>
      <span className="h-px flex-1 max-w-xs bg-linear-to-l from-transparent via-amber-500/50 to-amber-500/70" />
    </div>
  );
};

export default IslamicDivider;
