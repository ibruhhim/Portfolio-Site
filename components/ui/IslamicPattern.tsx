import React from "react";

interface IslamicPatternProps {
  className?: string;
  opacity?: number;
}

/**
 * Subtle Islamic geometric tile overlay (interlocking diamond lattice).
 */
const IslamicPattern: React.FC<IslamicPatternProps> = ({
  className = "",
  opacity = 0.08,
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='none' stroke='%23c9a227' stroke-width='0.6'%3E%3Cpath d='M24 0 L48 24 L24 48 L0 24 Z'/%3E%3Cpath d='M24 8 L40 24 L24 40 L8 24 Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "48px 48px",
      }}
    />
  );
};

export default IslamicPattern;
