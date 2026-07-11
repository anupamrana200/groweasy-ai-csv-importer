"use client";

import {
  Database,
  BrainCircuit,
  CircleCheckBig,
  Clock3,
} from "lucide-react";

import StatCard from "../ui/StatCard";

export default function QuickStats({
  selectedFile,
  parsedData,
  isImporting,
  importResult,
}) {
  const status = importResult
    ? "Completed"
    : isImporting
    ? "Running"
    : selectedFile
    ? "Ready"
    : "Idle";

  const importStatus = importResult
    ? "Completed"
    : isImporting
    ? "Running"
    : "Waiting";

  const importColor = importResult
    ? "text-green-600"
    : isImporting
    ? "text-blue-600"
    : "text-amber-600";

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        icon={<Database />}
        label="CSV Records"
        value={parsedData.length}
        color="text-blue-600"
      />

      <StatCard
        icon={<BrainCircuit />}
        label="AI Provider"
        value="Auto"
        color="text-violet-600"
      />

      <StatCard
        icon={<CircleCheckBig />}
        label="Status"
        value={status}
        color="text-green-600"
      />

      <StatCard
        icon={<Clock3 />}
        label="Import"
        value={importStatus}
        color={importColor}
      />

    </div>
  );
}