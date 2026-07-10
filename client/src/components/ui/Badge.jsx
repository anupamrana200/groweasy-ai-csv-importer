"use client";

import clsx from "clsx";

const variants = {
  success: "bg-green-100 text-green-700 border-green-200",
  warning: "bg-amber-100 text-amber-700 border-amber-200",
  danger: "bg-red-100 text-red-700 border-red-200",
  info: "bg-blue-100 text-blue-700 border-blue-200",
  purple: "bg-violet-100 text-violet-700 border-violet-200",
  gray: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function Badge({
  children,
  variant = "gray",
  className = "",
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}