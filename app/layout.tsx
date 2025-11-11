import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibrahim's Portfolio",
  description:
    "Hi, I'm Ibrahim — a full-stack developer and CS student at UofT. I’m passionate about creating clean, user-focused digital experiences and continuously exploring new ideas in technology and design.",
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
  ],
  authors: [{ name: "Ibrahim Ellahi" }],
  creator: "Ibrahim Ellahi",
  metadataBase: new URL("https://ibrahimellahi.com"),

  // 👇 Open Graph metadata for link previews (Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    title: "Ibrahim's Portfolio",
    description:
      "Hi, I'm Ibrahim — a full-stack developer and CS student at UofT. I’m passionate about creating clean, user-focused digital experiences and continuously exploring new ideas in technology and design.",
    url: "https://ibrahimellahi.com",
    siteName: "Ibrahim Ellahi",
    images: [
      {
        url: "/assets/pfp.jpeg",
        width: 1200,
        height: 630,
        alt: "Ibrahim Ellahi — Full-Stack Developer & CS Student at UofT",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 👇 Twitter metadata for link sharing
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim's Portfolio",
    description:
      "Hi, I'm Ibrahim — a full-stack developer and CS student at UofT. I’m passionate about creating clean, user-focused digital experiences and continuously exploring new ideas in technology and design.",
    images: ["/assets/pfp.jpeg"],
    creator: "@yourtwitterhandle", // replace with your actual handle if you have one
  },

  // 👇 Icons and theme
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0f172a",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="max-sm:text-[12px] max-md:text-[14px] max-lg:text-[16px]"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
