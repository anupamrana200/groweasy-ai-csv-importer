"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function Card({
  children,
  className = "",
  hover = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      whileHover={
        hover
          ? {
              y: -3,
              transition: {
                duration: 0.2,
              },
            }
          : undefined
      }
      className={clsx(
        `
        rounded-3xl
        border

        border-slate-200/70
        bg-white

        p-6

        shadow-sm

        transition-all
        duration-300

        hover:shadow-lg

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-black/20
        `,
        className
      )}
    >
      {children}
    </motion.div>
  );
}