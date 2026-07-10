"use client";

export default function MainLayout({ children }) {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-gradient-to-br
        from-slate-50
        via-white
        to-blue-50
      "
    >
      {children}
    </div>
  );
}