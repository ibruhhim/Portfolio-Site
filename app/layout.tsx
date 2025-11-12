import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/constants/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [{ name: SITE_METADATA.author }],
  creator: SITE_METADATA.author,
  metadataBase: new URL(SITE_METADATA.url),

  // 👇 Open Graph metadata for link previews (Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.url,
    siteName: SITE_METADATA.siteName,
    images: [
      {
        url: SITE_METADATA.ogImage.url,
        width: SITE_METADATA.ogImage.width,
        height: SITE_METADATA.ogImage.height,
        alt: SITE_METADATA.ogImage.alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 👇 Twitter metadata for link sharing
  twitter: {
    card: SITE_METADATA.twitter.card,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [SITE_METADATA.ogImage.url],
    creator: SITE_METADATA.twitter.creator,
  },

  // 👇 Icons
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: SITE_METADATA.themeColor,
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
