"use client";

import Card from "../ui/Card";
import ProgressBar from "./ProgressBar";

export default function ProgressCard({ progress }) {
  if (!progress) return null;

  return (
    <Card className="mt-6">
      <h2 className="text-lg font-semibold text-slate-900">
        🤖 AI Processing
      </h2>

      <p className="mt-2 text-slate-600">
        {progress.processedRecords} / {progress.totalRecords} Records
      </p>

      <div className="mt-4">
        <ProgressBar percentage={progress.percentage} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-medium">Batches:</span>{" "}
          {progress.completedBatches} / {progress.totalBatches}
        </div>

        <div>
          <span className="font-medium">Workers:</span>{" "}
          {progress.workers}
        </div>

        <div>
          <span className="font-medium">Provider:</span>{" "}
          {progress.provider}
        </div>

        <div>
          <span className="font-medium">Elapsed:</span>{" "}
          {progress.elapsed}s
        </div>
      </div>
    </Card>
  );
}