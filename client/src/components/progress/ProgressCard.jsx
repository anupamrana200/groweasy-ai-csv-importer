"use client";

import {
  BrainCircuit,
  Clock3,
  Sparkles,
  Boxes,
  Cpu,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import ProgressBar from "./ProgressBar";

export default function ProgressCard({ progress }) {
  if (!progress) return null;

  return (
    <Card hover className="mt-6">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-blue-100 p-3 dark:bg-blue-900/30">
              <BrainCircuit
                size={26}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                AI Processing
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Your CSV is being converted into CRM-ready records.
              </p>

            </div>

          </div>

        </div>

        <Badge variant="info">
          {progress.provider || "Auto"}
        </Badge>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-2 flex items-center justify-between">

          <span className="font-medium text-slate-700 dark:text-slate-300">
            Processing Progress
          </span>

          <span className="font-semibold text-blue-700 dark:text-blue-400">
            {progress.percentage.toFixed(0)}%
          </span>

        </div>

        <ProgressBar percentage={progress.percentage} />

      </div>

      {/* Record Counter */}

      <div
        className="
          mt-5
          flex
          items-center
          justify-between

          rounded-2xl

          bg-slate-50

          p-4

          dark:bg-slate-800
        "
      >

        <div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Records Processed
          </p>

          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            {progress.processedRecords}

            <span className="text-slate-400 dark:text-slate-500">
              {" "}
              / {progress.totalRecords}
            </span>

          </h3>

        </div>

        <Sparkles
          className="text-blue-600 dark:text-blue-400"
          size={34}
        />

      </div>

      {/* Statistics */}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Batches */}

        <div
          className="
            rounded-2xl

            border
            border-slate-200

            bg-white

            p-4

            dark:border-slate-700
            dark:bg-slate-900
          "
        >

          <div className="mb-2 flex items-center gap-2">

            <Boxes
              size={18}
              className="text-blue-600 dark:text-blue-400"
            />

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Batches
            </p>

          </div>

          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
            {progress.completedBatches}

            <span className="text-slate-400 dark:text-slate-500">
              /{progress.totalBatches}
            </span>

          </h4>

        </div>

        {/* Workers */}

        <div
          className="
            rounded-2xl

            border
            border-slate-200

            bg-white

            p-4

            dark:border-slate-700
            dark:bg-slate-900
          "
        >

          <div className="mb-2 flex items-center gap-2">

            <Cpu
              size={18}
              className="text-violet-600 dark:text-violet-400"
            />

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Workers
            </p>

          </div>

          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
            {progress.workers}
          </h4>

        </div>

        {/* Elapsed */}

        <div
          className="
            rounded-2xl

            border
            border-slate-200

            bg-white

            p-4

            dark:border-slate-700
            dark:bg-slate-900
          "
        >

          <div className="mb-2 flex items-center gap-2">

            <Clock3
              size={18}
              className="text-green-600 dark:text-green-400"
            />

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Elapsed
            </p>

          </div>

          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
            {progress.elapsed}s
          </h4>

        </div>

        {/* Status */}

        <div
          className="
            rounded-2xl

            border
            border-slate-200

            bg-white

            p-4

            dark:border-slate-700
            dark:bg-slate-900
          "
        >

          <div className="mb-2 flex items-center gap-2">

            <BrainCircuit
              size={18}
              className="text-amber-600 dark:text-amber-400"
            />

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Status
            </p>

          </div>

          <Badge variant="warning">
            Processing
          </Badge>

        </div>

      </div>

    </Card>
  );
}