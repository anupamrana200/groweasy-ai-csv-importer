"use client";

export default function EmptyState({
  icon,
  title,
  description,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-8 py-16">

      <div className="mb-4 text-blue-600">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-center text-slate-500">
        {description}
      </p>

    </div>
  );
}