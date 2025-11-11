"use client";

import React, { useState, useEffect } from 'react';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-black">About</h3>
            <p className="text-gray-600 text-sm leading-6">
              My name is Ibrahim! I love programming and the world of tech, always discovering new things and exploring the endless possibilities of code. One of my biggest strengths is my passion for bringing ideas to life—I love creating and designing, which is why I enjoy frontend development so much. When I&apos;m not coding, you&apos;ll find me appreciating nature and the calming sound of rain, which helps me think and create. Let&apos;s connect and build something amazing together!
            </p>
          </div>

          <FooterLinks />
          <FooterContact />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Ibrahim Ellahi. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

