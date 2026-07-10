"use client";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-6">

      <h2
        className="
          text-xl
          font-semibold

          text-slate-900

          dark:text-white
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mt-1
            text-sm

            text-slate-500

            dark:text-slate-400
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
}