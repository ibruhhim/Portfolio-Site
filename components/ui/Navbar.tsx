"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/utils/cn";


export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto rounded-full bg-white/95 backdrop-blur-lg shadow-lg border border-gray-100 z-[5000] px-6 py-3 items-center justify-center gap-6",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
        <button
          key={`link=${idx}`}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(navItem.link);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={cn(
            "relative items-center flex transition-all duration-300 text-sm text-gray-700 hover:text-pink-600 font-medium px-3 py-1.5 rounded-full hover:bg-pink-50"
          )}
  >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
