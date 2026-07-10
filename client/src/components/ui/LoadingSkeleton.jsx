"use client";

export default function LoadingSkeleton({
  className = "",
}) {
  return (
    <div
      className={`
        animate-pulse
        rounded-xl
        bg-slate-200
        ${className}
      `}
    />
  );
}