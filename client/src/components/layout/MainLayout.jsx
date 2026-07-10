"use client";

export default function MainLayout({
  children,
}) {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden

        bg-gradient-to-br

        from-slate-50
        via-white
        to-blue-50

        transition-colors
        duration-300

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      {children}
    </div>
  );
}