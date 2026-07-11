"use client";

import {
  AlertTriangle,
  User,
  CircleX,
} from "lucide-react";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export default function SkippedRecordsTable({
  records = [],
}) {
  if (!records.length) return null;

  return (
    <Card hover>

      <SectionTitle
        title="Skipped Records"
        subtitle="These records were skipped because they do not contain a valid email or mobile number."
      />

      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">

        <AlertTriangle
          size={22}
          className="text-amber-600 dark:text-amber-400"
        />

        <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
          {records.length} record{records.length > 1 ? "s were" : " was"} skipped during AI processing.
        </p>

      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">

        <div className="overflow-auto">

          <table className="min-w-full">

            <thead className="bg-slate-100 dark:bg-slate-800">

              <tr>

                <th className="px-4 py-4 text-left text-sm font-bold text-slate-900 dark:text-slate-100">
                  Row
                </th>

                <th className="px-4 py-4 text-left text-sm font-bold text-slate-900 dark:text-slate-100">
                  Name
                </th>

                <th className="px-4 py-4 text-left text-sm font-bold text-slate-900 dark:text-slate-100">
                  Reason
                </th>

              </tr>

            </thead>

            <tbody>

              {records.map((record) => (

                <tr
                  key={record.rowId}
                  className="border-t border-slate-200 transition hover:bg-red-50 dark:border-slate-700 dark:hover:bg-red-950/20"
                >

                  <td className="px-4 py-4 font-semibold text-slate-700 dark:text-slate-300">
                    #{record.rowId}
                  </td>

                  <td className="px-4 py-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">

                        <User
                          size={16}
                          className="text-slate-500 dark:text-slate-400"
                        />

                      </div>

                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {record.name || "-"}
                      </span>

                    </div>

                  </td>

                  <td className="px-4 py-4">

                    <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">

                      <CircleX size={16} />

                      {record.reason}

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </Card>
  );
}