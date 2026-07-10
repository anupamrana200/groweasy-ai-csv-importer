"use client";

export default function EmptyState({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center

        rounded-2xl

        border
        border-dashed
        border-slate-300

        bg-slate-50

        px-8
        py-16

        transition-colors
        duration-300

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div
        className="
          mb-5

          text-blue-600

          dark:text-blue-400
        "
      >
        {icon}
      </div>

      <h3
        className="
          text-2xl
          font-bold

          text-slate-900

          dark:text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          max-w-md
          text-center

          text-slate-500

          dark:text-slate-400
        "
      >
        {description}
      </p>
    </div>
  );
}