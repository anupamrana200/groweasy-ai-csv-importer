import {
  Upload,
  Table,
  BrainCircuit,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const workflow = [
  {
    key: "uploaded",
    title: "Upload",
    icon: Upload,
  },
  {
    key: "previewed",
    title: "Preview",
    icon: Table,
  },
  {
    key: "processing",
    title: "AI Processing",
    icon: BrainCircuit,
  },
  {
    key: "results",
    title: "Results",
    icon: CheckCircle2,
  },
];

export default function Sidebar({ workflowState }) {
  return (
    <aside className="w-64 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-bold text-slate-900">
        Workflow
      </h2>

      <div className="space-y-4">
        {workflow.map((item) => {
          const Icon = item.icon;

          const isProcessing =
            item.key === "processing" &&
            workflowState?.processing;

          const completed =
            item.key === "processing"
              ? workflowState?.processed
              : item.key === "results"
              ? workflowState?.processed
              : workflowState?.[item.key];

          return (
            <div
              key={item.title}
              className={`flex items-center gap-3 rounded-xl border p-3 transition-all duration-300
                ${
                  isProcessing
                    ? "border-amber-300 bg-amber-50"
                    : completed
                    ? "border-green-200 bg-green-50"
                    : "border-slate-200 bg-white"
                }`}
            >
              {isProcessing ? (
                <Loader2
                  size={20}
                  className="animate-spin text-amber-500"
                />
              ) : (
                <Icon
                  size={20}
                  className={
                    completed
                      ? "text-green-600"
                      : "text-slate-500"
                  }
                />
              )}

              <span
                className={
                  isProcessing
                    ? "font-semibold text-amber-700"
                    : completed
                    ? "font-semibold text-green-700"
                    : "font-medium text-slate-700"
                }
              >
                {isProcessing ? "AI Processing..." : item.title}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}