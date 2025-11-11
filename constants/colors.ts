/**
 * Color constants used throughout the application
 */
export const COLORS = {
  gradients: {
    pinkPurple: "from-pink-500 to-purple-600",
    purpleViolet: "from-purple-500 to-violet-600",
    violetPink: "from-violet-500 to-pink-600",
    // Single color shades for experience cards - light pinks
    pinkShades: "from-pink-400 to-pink-600",
    purpleShades: "from-purple-400 to-purple-600",
  },
  techBadges: [
    "bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100",
    "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100",
    "bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100",
  ],
  bulletPoints: ['text-pink-500', 'text-purple-500', 'text-violet-500'],
  glow: "rgba(236,72,153,0.8)",
} as const;

