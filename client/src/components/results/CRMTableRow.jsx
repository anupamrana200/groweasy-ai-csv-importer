"use client";

import StatusBadge from "./StatusBadge";

export default function CRMTableRow({
  record,
  index,
}) {
  if (!record) return null;

  return (
    <tr
      className={`
        transition-all
        duration-200

        hover:bg-blue-50

        dark:hover:bg-slate-800

        ${
          index % 2 === 0
            ? "bg-white dark:bg-slate-900"
            : "bg-slate-50/60 dark:bg-slate-950"
        }
      `}
    >
      <td
        className="
          border-b
          border-slate-200

          px-4
          py-4

          text-sm
          font-semibold

          text-slate-600

          dark:border-slate-700
          dark:text-slate-400
        "
      >
        {index + 1}
      </td>

      <td
        className="
          border-b
          border-slate-200

          px-4
          py-4

          text-sm
          font-semibold

          text-slate-900

          dark:border-slate-700
          dark:text-white
        "
      >
        {record.name || "-"}
      </td>

      <td
        className="
          border-b
          border-slate-200

          px-4
          py-4

          text-sm

          text-slate-700

          dark:border-slate-700
          dark:text-slate-300
        "
      >
        {record.email || "-"}
      </td>

      <td
        className="
          border-b
          border-slate-200

          px-4
          py-4

          text-sm

          text-slate-700

          dark:border-slate-700
          dark:text-slate-300
        "
      >
        {record.mobile_without_country_code || "-"}
      </td>

      <td
        className="
          border-b
          border-slate-200

          px-4
          py-4

          text-sm

          text-slate-700

          dark:border-slate-700
          dark:text-slate-300
        "
      >
        {record.city || "-"}
      </td>

      <td
        className="
          border-b
          border-slate-200

          px-4
          py-4

          dark:border-slate-700
        "
      >
        <StatusBadge status={record.crm_status} />
      </td>
    </tr>
  );
}