"use client";

import React from 'react';
import { FaRegClone } from 'react-icons/fa';

const EmailButton: React.FC = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ibrahim.ellahi@mail.utoronto.ca");
  };

  return (
    <button
      className="relative z-20 flex p-4 px-8 h-24 justify-center cursor-pointer items-center rounded-2xl shadow-lg m-5 text-md bg-emerald-900 hover:bg-emerald-950 text-white font-semibold transition-all border border-amber-300/25"
      onClick={handleCopyEmail}
    >
      <FaRegClone className="mr-2" size={15} /> Copy Email
    </button>
  );
};

export default EmailButton;
