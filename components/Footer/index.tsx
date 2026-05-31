"use client";

import React, { useState, useEffect } from 'react';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import IslamicPattern from '../ui/IslamicPattern';
import ArabicCalligraphy from '../ui/ArabicCalligraphy';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(() => {
    if (typeof window !== 'undefined') {
      return new Date().getFullYear();
    }
    return new Date().getFullYear();
  });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-emerald-950 border-t border-amber-500/20 w-full py-16 overflow-hidden">
      <IslamicPattern opacity={0.04} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-amber-400">About</h3>
            <p className="text-gray-300 text-base md:text-sm leading-relaxed mb-4">
              I&apos;m Ibrahim, a Computer Science student at the University of Toronto with a focus on full-stack and frontend development.
            </p>
            <p className="text-gray-400 text-base md:text-sm leading-relaxed">
              I&apos;m committed to continuous learning, thoughtful engineering, and building software that genuinely serves people. Always open to connect and collaborate.
            </p>
          </div>
          <FooterLinks />
          <FooterContact />
        </div>
        <div className="border-t border-amber-500/15 pt-8">
          <ArabicCalligraphy className="block text-center text-xl md:text-2xl text-amber-400/70 mb-6">
            جَزَاكَ ٱللَّٰهُ خَيْرًا
          </ArabicCalligraphy>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-base md:text-sm" suppressHydrationWarning>
              © {currentYear} Ibrahim Ellahi. All rights reserved.
            </p>
            <p className="text-gray-400 text-base md:text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
