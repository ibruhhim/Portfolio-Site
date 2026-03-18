/**
 * Color constants used throughout the application
 */
export const COLORS = {
  gradients: {
    // Nabawi-inspired palette (emerald + gold/amber)
    pinkPurple: "from-emerald-500 to-emerald-700",
    purpleViolet: "from-emerald-600 to-amber-500",
    violetPink: "from-amber-400 to-amber-600",
    // Single color shades for experience cards (emerald variations)
    pinkShadesLight: "from-emerald-400 to-emerald-500",
    pinkShadesDark: "from-emerald-500 to-emerald-600",
  },
  techBadges: [
    "bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100",
    "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100",
    "bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100",
  ],
  bulletPoints: ['text-emerald-500', 'text-amber-500', 'text-emerald-600'],
  glow: "rgba(16,185,129,0.75)",
} as const;

