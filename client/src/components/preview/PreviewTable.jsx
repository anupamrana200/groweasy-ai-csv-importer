"use client";

export default function PreviewTable({
  headers,
  parsedData,
}) {
  return (
    <div
      className="
        w-full
        overflow-auto

        rounded-2xl

        border
        border-slate-200

        bg-white

        max-h-[600px]

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

            <th
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

                dark:border-slate-700
                dark:bg-slate-800
                dark:text-slate-100
              "
            >
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

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-100
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

                dark:hover:bg-slate-800

                ${
                  index % 2 === 0
                    ? "bg-white dark:bg-slate-900"
                    : "bg-slate-50/70 dark:bg-slate-950"
                }
              `}
            >

              <td
                className="
                  border-b

                  border-slate-200

                  px-4
                  py-3

                  whitespace-nowrap

                  text-sm
                  font-medium

                  text-slate-800

                  dark:border-slate-700
                  dark:text-slate-200
                "
              >
                {index + 1}
              </td>

              {headers.map((header) => (

                <td
                  key={header}
                  className="
                    border-b

                    border-slate-200

                    px-4
                    py-3

                    whitespace-nowrap

                    text-sm
                    font-medium

                    text-slate-800

                    dark:border-slate-700
                    dark:text-slate-300
                  "
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