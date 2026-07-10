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

  return (
    <div className="overflow-hidden">

      <CRMTableToolbar
        search={search}
        setSearch={setSearch}
        total={filteredRecords.length}
      />

      <div
        className="
          mt-6
          max-h-[600px]
          w-full
          overflow-auto
          rounded-2xl
          border
          border-slate-200
        "
      >
        <table
          className="
            min-w-[1000px]
            w-full
            border-collapse
          "
        >
          <thead className="sticky top-0 z-20 bg-slate-100 shadow-sm">

            <tr>

              <th className="border-b border-slate-200 px-4 py-4 text-left text-sm font-bold text-slate-900">
                #
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left text-sm font-bold text-slate-900">
                Name
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left text-sm font-bold text-slate-900">
                Email
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left text-sm font-bold text-slate-900">
                Mobile
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left text-sm font-bold text-slate-900">
                City
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left text-sm font-bold text-slate-900">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredRecords.length > 0 ? (
              filteredRecords
                .filter(Boolean)
                .map((record, index) => (
                  <CRMTableRow
                    key={index}
                    record={record}
                    index={index}
                  />
                ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="py-12 text-center text-slate-500"
                >
                  No records found.
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

    </div>
  );
}