"use client";

import { motion } from "framer-motion";

export default function Section({
  children,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="mb-8"
    >
      {children}
    </motion.section>
  );
}