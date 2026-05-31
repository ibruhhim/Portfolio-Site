import React from "react";
import { cn } from "@/utils/cn";
import ArabicCalligraphy from "./ArabicCalligraphy";

interface SectionHeadingProps {
  title: React.ReactNode;
  arabicTitle?: string;
  description?: string;
  variant?: "light" | "dark";
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  arabicTitle,
  description,
  variant = "light",
  className,
}) => {
  const isLight = variant === "light";

  return (
    <div className={cn("text-center mb-10 md:mb-12 px-6 md:px-4", className)}>
      {arabicTitle && (
        <ArabicCalligraphy
          as="p"
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-relaxed",
            isLight ? "text-amber-400" : "text-amber-300"
          )}
        >
          {arabicTitle}
        </ArabicCalligraphy>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4",
          isLight ? "text-emerald-950" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed",
            isLight ? "text-gray-600" : "text-gray-300"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-24 mx-auto bg-linear-to-r from-transparent to-transparent",
          isLight ? "via-amber-300/60" : "via-amber-300/50"
        )}
      />
    </div>
  );
};

export default SectionHeading;
