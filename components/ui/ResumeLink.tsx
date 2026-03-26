import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ResumeLink: React.FC = () => {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex shadow-lg justify-center items-center px-12 py-6 md:px-16 md:py-8 bg-linear-to-r from-emerald-700 to-emerald-900 hover:from-emerald-800 hover:to-emerald-900 text-white font-semibold text-xl rounded-3xl transition-all"
    >
      <FaArrowUp size={20} />
    </a>
  );
};

export default ResumeLink;

