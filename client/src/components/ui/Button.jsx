"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",

  secondary:
    "bg-slate-100 text-slate-800 hover:bg-slate-200",

  success:
    "bg-green-600 text-white hover:bg-green-700 shadow-sm",

  danger:
    "bg-red-600 text-white hover:bg-red-700 shadow-sm",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.02,
              y: -1,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.98,
            }
      }
      disabled={disabled}
      className={twMerge(
        clsx(
          `
          inline-flex
          items-center
          justify-center
          gap-2

          rounded-xl
          font-medium

          transition-all
          duration-200

          whitespace-nowrap

          disabled:cursor-not-allowed
          disabled:bg-slate-300
          disabled:text-slate-500
          disabled:shadow-none
          `,
          variants[variant],
          sizes[size],
          className
        )
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}