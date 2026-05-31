/**
 * Color constants used throughout the application
 * Nabawi-inspired Islamic palette: emerald + gold
 */
export const COLORS = {
  gradients: {
    pinkPurple: "from-emerald-700 to-emerald-900",
    purpleViolet: "from-emerald-800 to-amber-400",
    violetPink: "from-amber-300 to-amber-500",
    pinkShadesLight: "from-emerald-700 to-emerald-800",
    pinkShadesDark: "from-emerald-800 to-emerald-900",
  },
  techBadges: [
    "bg-emerald-100 border-amber-300/60 text-emerald-900 hover:bg-emerald-200",
    "bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100",
    "bg-emerald-100 border-amber-300/60 text-emerald-900 hover:bg-emerald-200",
  ],
  bulletPoints: ['text-emerald-700', 'text-amber-400', 'text-emerald-800'],
  glow: "rgba(252, 211, 77, 0.45)",
} as const;
