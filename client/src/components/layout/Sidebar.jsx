"use client";

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
    <aside
      className="
        hidden
        lg:block
        w-72
        sticky
        top-28
        h-fit
      "
    >
      <div
        className="
          rounded-3xl
          border
          border-white/40
          bg-white/80
          backdrop-blur-xl
          shadow-lg
          p-6
        "
      >
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900">
            Workflow
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track your AI import progress.
          </p>
        </div>

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
                ? workflowState?.results
                : workflowState?.[item.key];

            return (
              <div
                key={item.key}
                className={`
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-md

                  ${
                    isProcessing
                      ? "border-amber-200 bg-amber-50"
                      : completed
                      ? "border-green-200 bg-green-50"
                      : "border-slate-200 bg-white"
                  }
                `}
              >
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl

                    ${
                      isProcessing
                        ? "bg-amber-100"
                        : completed
                        ? "bg-green-100"
                        : "bg-slate-100"
                    }
                  `}
                >
                  {isProcessing ? (
                    <Loader2
                      size={20}
                      className="animate-spin text-amber-600"
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
                </div>

                <div>
                  <p
                    className={`
                      font-semibold

                      ${
                        isProcessing
                          ? "text-amber-700"
                          : completed
                          ? "text-green-700"
                          : "text-slate-800"
                      }
                    `}
                  >
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">
                    {isProcessing
                      ? "Processing..."
                      : completed
                      ? "Completed"
                      : "Waiting"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}