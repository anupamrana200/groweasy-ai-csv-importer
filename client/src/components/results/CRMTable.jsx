"use client";

import { useMemo, useState } from "react";

import CRMTableToolbar from "./CRMTableToolbar";
import CRMTableRow from "./CRMTableRow";

export default function CRMTable({ records = [] }) {
  const [search, setSearch] = useState("");

  const filteredRecords = useMemo(() => {
    if (!search.trim()) return records;

    const query = search.toLowerCase();

    return records.filter((record) => {
      if (!record) return false;

      return Object.values(record).some((value) =>
        String(value ?? "")
          .toLowerCase()
          .includes(query)
      );
    });
  }, [records, search]);

  // ===================================================
  // Export AI CRM Records to CSV
  // ===================================================

  const exportToCSV = () => {
    if (!records.length) return;

    const headers = [
      "created_at",
      "name",
      "email",
      "country_code",
      "mobile_without_country_code",
      "company",
      "city",
      "state",
      "country",
      "lead_owner",
      "crm_status",
      "crm_note",
      "data_source",
      "possession_time",
      "description",
    ];

    const escapeCSV = (value) => {
      const str = String(value ?? "");

      if (
        str.includes(",") ||
        str.includes('"') ||
        str.includes("\n")
      ) {
        return `"${str.replace(/"/g, '""')}"`;
      }

      return str;
    };

    const rows = records.map((record) =>
      headers
        .map((field) => escapeCSV(record[field]))
        .join(",")
    );

    const csv = [
      headers.join(","),
      ...rows,
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    const date = new Date().toISOString().split("T")[0];

    link.href = url;
    link.download = `groweasy-crm-export-${date}.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="overflow-hidden">

      <CRMTableToolbar
        search={search}
        setSearch={setSearch}
        total={filteredRecords.length}
        onExport={exportToCSV}
      />

      <div
        className="
          mt-6
          max-h-[650px]
          w-full
          overflow-auto
          rounded-2xl
          border
          border-slate-200
          bg-white
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <table
          className="
            w-full
            min-w-[1200px]
            border-collapse
          "
        >
          <thead
            className="
              sticky
              top-0
              z-20
              bg-slate-100
              shadow-sm
              dark:bg-slate-800
            "
          >
            <tr>

              <th className="border-b border-slate-200 bg-slate-100 px-4 py-4 text-left text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                #
              </th>

              <th className="border-b border-slate-200 bg-slate-100 px-4 py-4 text-left text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                Name
              </th>

              <th className="border-b border-slate-200 bg-slate-100 px-4 py-4 text-left text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                Email
              </th>

              <th className="border-b border-slate-200 bg-slate-100 px-4 py-4 text-left text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                Mobile
              </th>

              <th className="border-b border-slate-200 bg-slate-100 px-4 py-4 text-left text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                City
              </th>

              <th className="border-b border-slate-200 bg-slate-100 px-4 py-4 text-left text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                Status
              </th>

              <th className="border-b border-slate-200 bg-slate-100 px-4 py-4 text-left text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                Source
              </th>

              <th className="border-b border-slate-200 bg-slate-100 px-4 py-4 text-center text-sm font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                Details
              </th>

            </tr>
          </thead>

          <tbody>

            {filteredRecords.length > 0 ? (

              filteredRecords.map((record, index) => (

                <CRMTableRow
                  key={record._meta?.rowId ?? index}
                  record={record}
                  index={index}
                />

              ))

            ) : (

              <tr>

                <td
                  colSpan={8}
                  className="
                    py-12
                    text-center
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  No matching records found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}