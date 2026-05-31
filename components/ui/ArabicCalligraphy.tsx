import React from "react";
import { cn } from "@/utils/cn";
import { amiri } from "@/constants/fonts";

interface ArabicCalligraphyProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h2" | "div";
}

/**
 * Renders Arabic text in Amiri calligraphy (RTL).
 * Uses amiri.className so glyphs actually load — not just the CSS variable.
 */
const ArabicCalligraphy: React.FC<ArabicCalligraphyProps> = ({
  children,
  className,
  as: Tag = "span",
}) => {
  return (
    <Tag
      lang="ar"
      dir="rtl"
      className={cn(amiri.className, "arabic-calligraphy", className)}
    >
      {children}
    </Tag>
  );
};

export default ArabicCalligraphy;
