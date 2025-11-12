import React from 'react';
import { FaBuilding, FaCode } from 'react-icons/fa';
import { COLORS } from "@/constants/colors";

export const getCompanyIcon = (index: number): React.ReactElement => {
  return index % 2 === 0 ? <FaBuilding size={24} /> : <FaCode size={24} />;
};

export const getExperienceGradient = (index: number): string => {
  return index % 2 === 0 
    ? COLORS.gradients.pinkShadesLight
    : COLORS.gradients.pinkShadesDark;
};

