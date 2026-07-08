import Card from "../ui/Card";

export default function ImportAction({
  parsedData,
}) {

  const hasData = parsedData.length > 0;

  return (
    <Card className="mt-6">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-semibold text-slate-800">
            Ready to Import
          </h3>

          <p className="mt-1 text-slate-600">
            {hasData
              ? `${parsedData.length} records are ready for AI processing.`
              : "Upload a CSV to continue."
            }
          </p>

        </div>

        <button
          disabled={!hasData}
          className="
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-medium
            text-white
            transition

            hover:bg-blue-700

            disabled:cursor-not-allowed
            disabled:bg-slate-300
          "
        >
          Confirm Import
        </button>

      </div>

    </Card>
  );
}