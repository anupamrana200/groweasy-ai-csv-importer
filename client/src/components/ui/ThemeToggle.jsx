"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        relative

        flex
        h-11
        w-20
        items-center

        rounded-full

        border
        border-slate-300

        bg-slate-100

        px-1

        transition-all

        hover:border-blue-500

        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 35,
        }}
        className={`
          absolute

          flex
          h-9
          w-9
          items-center
          justify-center

          rounded-full

          bg-white
          shadow-md

          dark:bg-slate-900

          ${
            isDark
              ? "translate-x-9"
              : "translate-x-0"
          }
        `}
      >
        {isDark ? (
          <Moon
            size={18}
            className="text-blue-400"
          />
        ) : (
          <Sun
            size={18}
            className="text-amber-500"
          />
        )}
      </motion.div>
    </button>
  );
}