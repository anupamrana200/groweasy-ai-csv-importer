"use client";

import {
  CheckCircle2,
  Database,
  XCircle,
  BrainCircuit,
} from "lucide-react";

import Card from "../ui/Card";

export default function ImportSummary({ summary }) {
  if (!summary) return null;

  return (
    <Card hover>

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-green-100 p-3 dark:bg-green-900/30">
          <CheckCircle2
            size={28}
            className="text-green-600 dark:text-green-400"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Import Summary
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            AI processing completed successfully.
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Total Rows
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                {summary.totalRows}
              </h3>

            </div>

            <Database className="text-blue-600" />

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Imported
              </p>

              <h3 className="mt-2 text-3xl font-bold text-green-600">
                {summary.totalImported}
              </h3>

            </div>

            <CheckCircle2 className="text-green-600" />

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Skipped
              </p>

              <h3 className="mt-2 text-3xl font-bold text-red-600">
                {summary.totalSkipped}
              </h3>

            </div>

            <XCircle className="text-red-600" />

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                AI Provider
              </p>

              <h3 className="mt-2 text-xl font-bold text-violet-600">
                {summary.provider}
              </h3>

            </div>

            <BrainCircuit className="text-violet-600" />

          </div>

        </div>

      </div>

    </Card>
  );
}