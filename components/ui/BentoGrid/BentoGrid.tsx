import React from "react";
import { cn } from "@/utils/cn";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid pb-36 max-w-7xl grid-cols-1 gap-6 md:gap-4 auto-rows-[18rem] md:grid-cols-2 lg:grid-cols-3 px-6 md:px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

