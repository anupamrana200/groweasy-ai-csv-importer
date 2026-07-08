export default function PreviewTable({
  headers,
  parsedData,
}) {
  return (
    <div className="overflow-auto rounded-xl border border-slate-200">
      <table className="min-w-full border-collapse">

        <thead className="sticky top-0 bg-slate-100 text-slate-700">

          <tr>

            <th className="border-b p-3 text-left whitespace-nowrap font-semibold text-slate-700">
              #
            </th>

            {headers.map((header) => (
              <th
                key={header}
                className="border-b p-3 text-left whitespace-nowrap font-semibold text-slate-700"
              >
                {header}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {parsedData.map((row, index) => (

            <tr
              key={index}
              className="hover:bg-blue-50 transition-colors"
            >

              <td className="border-b p-3 whitespace-nowrap text-slate-700">
                {index + 1}
              </td>

              {headers.map((header) => (
                <td
                  key={header}
                  className="border-b p-3 whitespace-nowrap text-slate-700"
                >
                  {row[header]}
                </td>
              ))}

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}