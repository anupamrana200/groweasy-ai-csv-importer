"use client";

import Card from "../ui/Card";

export default function PreviewTable({
  headers,
  parsedData,
}) {
  return (
    <Card className="overflow-hidden">

      <div
        className="
          w-full
          overflow-auto
          rounded-2xl
          border
          border-slate-200
          max-h-[600px]
        "
      >

        <table
          className="
            w-full
            min-w-[1200px]
            border-collapse
          "
        >

          <thead className="sticky top-0 z-20 bg-slate-100 shadow-sm">

            <tr>

              <th className="
                    border-b
                    border-slate-200
                    bg-slate-100
                    px-4
                    py-4
                    text-left
                    text-sm
                    font-bold
                    text-slate-900
                    whitespace-nowrap
                    ">
                #
              </th>

              {headers.map((header) => (

                <th
                  key={header}
                  className="
                    border-b
                    border-slate-200
                    bg-slate-100
                    px-4
                    py-4
                    text-left
                    text-sm
                    font-bold
                    text-slate-900
                    whitespace-nowrap
                    "
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

                <td className="border-b border-slate-200 px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-800">
                  {index + 1}
                </td>

                {headers.map((header) => (

                  <td
                    key={header}
                    className="border-b border-slate-200 px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-800"
                  >
                    {row[header]}
                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
}