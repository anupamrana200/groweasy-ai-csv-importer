"use client";

import { useState } from "react";
import Card from "../ui/Card";

export default function ImportAction({
  parsedData,
  handleImport,
  isImporting,
  importResult,
  resetImport,
}) {
  const hasData = parsedData.length > 0;

  const [provider, setProvider] = useState("auto");

  // ============================
  // Import Completed
  // ============================
  if (importResult) {
    return (
      <Card className="mt-6 border-green-200 bg-green-50">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-green-700">
              ✅ Import Completed Successfully
            </h3>

            <p className="mt-2 text-slate-700">
              {importResult.totalRecords} records have been processed successfully.
            </p>

            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p>
                <strong>AI Provider:</strong>{" "}
                {importResult.provider || "Auto"}
              </p>

              <p>
                <strong>Status:</strong> Success
              </p>
            </div>
          </div>

          <button
            onClick={resetImport}
            className="rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
          >
            Import Another CSV
          </button>
        </div>
      </Card>
    );
  }

  // ============================
  // Import In Progress
  // ============================
  if (isImporting) {
    return (
      <Card className="mt-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-blue-700">
            🤖 AI is Processing...
          </h3>

          <p className="mt-2 text-slate-600">
            Please wait while we analyze your CSV and generate CRM records.
          </p>
        </div>
      </Card>
    );
  }

  // ============================
  // Ready to Import
  // ============================
  return (
    <Card className="mt-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Ready to Import
          </h3>

          <p className="mt-1 text-slate-600">
            {hasData
              ? `${parsedData.length} records are ready for AI processing.`
              : "Upload a CSV to continue."}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            disabled={!hasData}
            className="rounded-lg border border-slate-300 px-3 py-2 disabled:bg-slate-100"
          >
            <option value="auto">Auto</option>
            <option value="gemini">Gemini</option>
            <option value="openai">OpenAI</option>
          </select>

          <button
            onClick={() => handleImport(provider)}
            disabled={!hasData}
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Confirm Import
          </button>
        </div>
      </div>
    </Card>
  );
}