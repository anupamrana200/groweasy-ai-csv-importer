"use client";

import StatusBadge from "./StatusBadge";

export default function CRMTableRow({
  record,
  index,
}) {
  if (!record) {
    return null;
  }

  return (
    <tr
      className={`
        transition-colors
        hover:bg-blue-50

        ${
          index % 2 === 0
            ? "bg-white"
            : "bg-slate-50/50"
        }
      `}
    >
      <td className="border-b border-slate-200 px-4 py-4 text-sm font-semibold text-slate-600">
        {index + 1}
      </td>

      <td className="border-b border-slate-200 px-4 py-4 text-sm font-semibold text-slate-900">
        {record.name || "-"}
      </td>

      <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-700">
        {record.email || "-"}
      </td>

      <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-700">
        {record.mobile_without_country_code || "-"}
      </td>

      <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-700">
        {record.city || "-"}
      </td>

      <td className="border-b border-slate-200 px-4 py-4">
        <StatusBadge
          status={record.crm_status}
        />
      </td>
    </tr>
  );
}