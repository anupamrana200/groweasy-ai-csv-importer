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
    ? "Processing"
    : selectedFile
    ? "Ready"
    : "Idle";

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
        value={isImporting ? "Running" : "Waiting"}
        color="text-amber-600"
      />

    </div>
  );
}