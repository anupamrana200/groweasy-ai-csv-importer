"use client";

import { motion } from "framer-motion";

export default function ProgressBar({
  percentage = 0,
}) {
  return (
    <div
      className="
        relative

        h-4
        w-full

        overflow-hidden

        rounded-full

        bg-slate-200

        dark:bg-slate-700
      "
    >

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: `${percentage}%`,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          h-full

          rounded-full

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-violet-600
        "
      />

      <div className="absolute inset-0 flex items-center justify-center">

        <span className="text-[10px] font-bold text-slate-700 dark:text-white">
          {percentage.toFixed(0)}%
        </span>

      </div>

    </div>
  );
}