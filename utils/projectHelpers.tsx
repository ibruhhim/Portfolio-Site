import React from "react";
import { FaGamepad, FaRoute, FaUtensils } from "react-icons/fa";
import { COLORS } from "@/constants/colors";

export const getProjectIcon = (icon: string): React.ReactElement => {
  switch (icon) {
    case "game":
      return <FaGamepad size={32} />;
    case "path":
      return <FaRoute size={32} />;
    case "food":
      return <FaUtensils size={32} />;
    default:
      return <FaGamepad size={32} />;
  }
};

export const getProjectGradient = (icon: string): string => {
  switch (icon) {
    case "game":
      return COLORS.gradients.pinkPurple;
    case "path":
      return COLORS.gradients.purpleViolet;
    case "food":
      return COLORS.gradients.violetPink;
    default:
      return COLORS.gradients.pinkPurple;
  }
};

export const getProjectSubtitle = (icon: string): string => {
  switch (icon) {
    case "game":
      return "Multiplayer Game";
    case "path":
      return "Algorithm Visualizer";
    case "food":
      return "Mobile Application";
    default:
      return "Project";
  }
};

