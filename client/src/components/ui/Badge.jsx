"use client";

import clsx from "clsx";

const variants = {
  success: `
    bg-green-100
    text-green-700
    border-green-200

    dark:bg-green-900/30
    dark:text-green-300
    dark:border-green-800
  `,

  warning: `
    bg-amber-100
    text-amber-700
    border-amber-200

    dark:bg-amber-900/30
    dark:text-amber-300
    dark:border-amber-800
  `,

  danger: `
    bg-red-100
    text-red-700
    border-red-200

    dark:bg-red-900/30
    dark:text-red-300
    dark:border-red-800
  `,

  info: `
    bg-blue-100
    text-blue-700
    border-blue-200

    dark:bg-blue-900/30
    dark:text-blue-300
    dark:border-blue-800
  `,

  purple: `
    bg-violet-100
    text-violet-700
    border-violet-200

    dark:bg-violet-900/30
    dark:text-violet-300
    dark:border-violet-800
  `,

  gray: `
    bg-slate-100
    text-slate-700
    border-slate-200

    dark:bg-slate-800
    dark:text-slate-300
    dark:border-slate-700
  `,
};

export default function Badge({
  children,
  variant = "gray",
  className = "",
}) {
  return (
    <span
      className={clsx(
        `
        inline-flex
        items-center

        rounded-full

        border

        px-3
        py-1

        text-xs
        font-semibold

        transition-colors
        duration-300
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}