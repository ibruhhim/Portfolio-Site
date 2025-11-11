"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import SocialButton from './ui/SocialButton';

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
              Third-year Computer Science student at UofT, passionate about creating impactful full-stack and frontend projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#hero" 
                  className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#awards" 
                  className="text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium"
                >
                  Awards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-black">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/ibruhhim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium"
              >
                <FaGithub className="mr-3" size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ibrahim-ellahi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium"
              >
                <FaLinkedin className="mr-3" size={18} />
                LinkedIn
              </a>
              <a
                href="mailto:ibrahim.ellahi@mail.utoronto.ca"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium"
              >
                <FaEnvelope className="mr-3" size={18} />
                Email
              </a>
            </div>
          </div>
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

