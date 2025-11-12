/**
 * Centralized metadata configuration
 * Edit this file to update all metadata across the site
 */

export const SITE_METADATA = {
  title: "Ibrahim's Portfolio",
  description:
    "I'm Ibrahim! My passion is bringing ideas to life through creation and design, which is why I love application development.",
  url: "https://ibrahimellahi.com",
  siteName: "Ibrahim Ellahi",
  author: "Ibrahim Ellahi",
  keywords: [
    "Ibrahim Ellahi",
    "Ibrahim portfolio",
    "full stack developer",
    "software engineer",
    "web developer",
    "CS student",
    "UofT",
    "University of Toronto",
    "frontend",
    "backend",
    "UI/UX",
    "developer portfolio",
    "digital design",
  ] as string[],
  ogImage: {
    url: "/assets/og-image.png",
    width: 1200,
    height: 630,
    alt: "Ibrahim Ellahi — Full-Stack Developer & CS Student at UofT",
  },
  twitter: {
    card: "summary_large_image" as const,
    creator: "@yourtwitterhandle", // replace with your actual handle if you have one
  },
  themeColor: "#0f172a",
};

