"use client";

export default function ImportSummary({
  totalRecords,
  provider,
}) {
  return (
    <div className="rounded-xl border border-green-200 bg-green-50 p-5">

      <h3 className="text-lg font-semibold text-green-700">
        ✅ Import Completed Successfully
      </h3>

      <div className="mt-4 grid gap-3 md:grid-cols-2">

        <div>
          <p className="text-sm text-slate-500">
            Records Processed
          </p>

          <p className="font-semibold text-slate-800">
            {totalRecords}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            AI Provider
          </p>

          <p className="font-semibold text-slate-800">
            {provider}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Status
          </p>

          <p className="font-semibold text-green-700">
            Success
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Ready for Import
          </p>

          <p className="font-semibold text-slate-800">
            Yes
          </p>
        </div>

      </div>

    </div>
  );
}