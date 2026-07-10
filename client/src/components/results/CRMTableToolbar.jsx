"use client";

import { Search, Download } from "lucide-react";
import Button from "../ui/Button";

export default function CRMTableToolbar({
  search,
  setSearch,
  total,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-xl font-bold text-slate-900">
          CRM Records
        </h2>

        <p className="text-sm text-slate-500">
          Showing {total} imported records
        </p>

      </div>

      <div className="flex flex-col gap-3 sm:flex-row">

        <div className="relative">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, city..."
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white

              py-2.5
              pl-10
              pr-4

              text-sm
              font-medium
              text-slate-800

              placeholder:text-slate-400

              shadow-sm

              outline-none
              transition-all

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-200
            "
          />

        </div>

        <Button variant="secondary">
          <Download
            size={18}
            className="mr-2"
          />

          Export
        </Button>

      </div>

    </div>
  );
}