"use client";

import { useState } from "react";

import {
  Database,
  BrainCircuit,
  CheckCircle2,
 Clock3,
} from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import StatCard from "../ui/StatCard";

import ProgressCard from "../progress/ProgressCard";

export default function ImportAction({
  parsedData,
  handleImport,
  isImporting,
  importResult,
  resetImport,
  progress,
}) {
  const hasData = parsedData.length > 0;

  const [provider, setProvider] = useState("auto");

  // ====================================================
  // Import Completed
  // ====================================================

  if (importResult) {
    return (
      <Card hover className="mt-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-green-100 p-3">
                <CheckCircle2
                  className="text-green-600"
                  size={28}
                />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Import Completed
                </h2>

                <p className="mt-1 text-slate-500">
                  Your CSV has been successfully converted into CRM-ready records.
                </p>

              </div>

            </div>

          </div>

          <Badge variant="success">
            Success
          </Badge>

        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<Database />}
            label="Records"
            value={importResult.totalRecords}
            color="text-blue-600"
          />

          <StatCard
            icon={<BrainCircuit />}
            label="Provider"
            value={importResult.provider || "Auto"}
            color="text-violet-600"
          />

          <StatCard
            icon={<CheckCircle2 />}
            label="Status"
            value="100%"
            color="text-green-600"
          />

          <StatCard
            icon={<Clock3 />}
            label="Duration"
            value={
              progress?.elapsed
                ? `${progress.elapsed}s`
                : "--"
            }
            color="text-amber-600"
          />

        </div>

        <div className="mt-8 flex justify-end">

          <Button
            variant="success"
            onClick={resetImport}
          >
            Import Another CSV
          </Button>

        </div>

      </Card>
    );
  }

  // ====================================================
  // Import Running
  // ====================================================

  if (isImporting) {
    return <ProgressCard progress={progress} />;
  }

  // ====================================================
  // Ready To Import
  // ====================================================

  return (
    <Card hover className="mt-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-xl font-bold text-slate-900">
            Ready to Import
          </h2>

          <p className="mt-2 text-slate-500">
            {hasData
              ? `${parsedData.length} records are ready for AI processing.`
              : "Upload a CSV file to begin AI processing."}
          </p>

        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            disabled={!hasData}
            className="
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3

              text-sm
              font-medium
              text-slate-800

              shadow-sm

              outline-none

              transition

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-200

              disabled:bg-slate-100
              disabled:text-slate-400
          "
          >
            <option value="auto">
              Auto Detect
            </option>

            <option value="gemini">
              Google Gemini
            </option>

            <option value="openai">
              OpenAI GPT
            </option>
          </select>

          <Button
            onClick={() => handleImport(provider)}
            disabled={!hasData}
          >
            Confirm Import
          </Button>

        </div>

      </div>

    </Card>
  );
}