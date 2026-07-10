"use client";

import Card from "./Card";

export default function StatCard({
  icon,
  label,
  value,
  color = "text-blue-600",
}) {
  return (
    <Card hover className="p-5">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {label}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>

        </div>

        <div className={`text-3xl ${color}`}>
          {icon}
        </div>

      </div>

    </Card>
  );
}