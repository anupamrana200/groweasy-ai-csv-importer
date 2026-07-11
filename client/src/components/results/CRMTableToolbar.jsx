"use client";

import { Search, Download } from "lucide-react";
import Button from "../ui/Button";

export default function CRMTableToolbar({
  search,
  setSearch,
  total,
  onExport,
}) {
  return (
    <div
      className="
        mb-6
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          CRM Records
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing {total} imported records
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">

        <div className="relative">

          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
              dark:text-slate-500
            "
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
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-100
              dark:placeholder:text-slate-500
              dark:focus:border-blue-400
              dark:focus:ring-blue-900
            "
          />

        </div>

        <Button
          variant="secondary"
          onClick={onExport}
          disabled={total === 0}
        >
          <Download
            size={18}
            className="mr-2"
          />

          Export CSV
        </Button>

      </div>

    </div>
  );
}