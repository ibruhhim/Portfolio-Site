/**
 * Color constants used throughout the application
 */
export const COLORS = {
  gradients: {
    // Nabawi-inspired palette (emerald + gold/amber)
    pinkPurple: "from-emerald-600 to-emerald-800",
    purpleViolet: "from-emerald-700 to-amber-500",
    violetPink: "from-amber-500 to-amber-700",
    // Single color shades for experience cards (emerald variations)
    pinkShadesLight: "from-emerald-600 to-emerald-700",
    pinkShadesDark: "from-emerald-700 to-emerald-800",
  },
  techBadges: [
    "bg-emerald-100 border-emerald-300 text-emerald-900 hover:bg-emerald-200",
    "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100",
    "bg-emerald-100 border-emerald-300 text-emerald-900 hover:bg-emerald-200",
  ],
  bulletPoints: ['text-emerald-600', 'text-amber-600', 'text-emerald-700'],
  glow: "rgba(5,150,105,0.75)",
} as const;

