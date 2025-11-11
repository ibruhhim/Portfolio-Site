"use client";

import React from 'react';
import { FaRegClone } from 'react-icons/fa';

const EmailButton: React.FC = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ibrahim.ellahi@mail.utoronto.ca");
  };

  return (
    <button
      className="flex p-4 px-8 h-24 justify-center cursor-pointer items-center rounded-2xl shadow-xl m-5 text-md bg-pink-600 hover:bg-pink-700 text-white font-semibold transition-all"
      onClick={handleCopyEmail}
    >
      <FaRegClone className="mr-2" size={15} /> Copy Email
    </button>
  );
};

export default EmailButton;

