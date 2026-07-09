"use client";

export default function ProgressBar({ percentage = 0 }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-blue-600 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}