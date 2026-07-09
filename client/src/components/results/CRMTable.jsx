"use client";

export default function CRMTable({ records }) {
  return (
    <div className="overflow-auto rounded-xl border border-slate-200">
      <table className="min-w-full border-collapse">

        <thead className="sticky top-0 bg-slate-100 text-slate-700">
          <tr>
            <th className="border-b p-3 text-left whitespace-nowrap font-semibold text-slate-700">
              #
            </th>

            <th className="border-b p-3 text-left whitespace-nowrap font-semibold text-slate-700">
              Name
            </th>

            <th className="border-b p-3 text-left whitespace-nowrap font-semibold text-slate-700">
              Email
            </th>

            <th className="border-b p-3 text-left whitespace-nowrap font-semibold text-slate-700">
              Mobile
            </th>

            <th className="border-b p-3 text-left whitespace-nowrap font-semibold text-slate-700">
              City
            </th>

            <th className="border-b p-3 text-left whitespace-nowrap font-semibold text-slate-700">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {records.map((record, index) => (
            <tr
              key={index}
              className="transition-colors hover:bg-blue-50"
            >
              <td className="border-b p-3 whitespace-nowrap text-slate-700">
                {index + 1}
              </td>

              <td className="border-b p-3 whitespace-nowrap font-medium text-slate-900">
                {record.name || "-"}
              </td>

              <td className="border-b p-3 whitespace-nowrap text-slate-700">
                {record.email || "-"}
              </td>

              <td className="border-b p-3 whitespace-nowrap text-slate-700">
                {record.mobile_without_country_code || "-"}
              </td>

              <td className="border-b p-3 whitespace-nowrap text-slate-700">
                {record.city || "-"}
              </td>

              <td className="border-b p-3 whitespace-nowrap text-slate-700">
                {record.crm_status || "-"}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}