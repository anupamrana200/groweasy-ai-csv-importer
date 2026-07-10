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

          transition-all
          duration-300

          dark:border-slate-700
          dark:bg-slate-900/80
        "
      >
        <div className="mb-8">

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Workflow
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
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
                      ? `
                        border-amber-300
                        bg-amber-50

                        dark:border-amber-800
                        dark:bg-amber-950/30
                      `
                      : completed
                      ? `
                        border-green-300
                        bg-green-50

                        dark:border-green-800
                        dark:bg-green-950/30
                      `
                      : `
                        border-slate-200
                        bg-white

                        dark:border-slate-700
                        dark:bg-slate-800
                      `
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
                        ? `
                          bg-amber-100

                          dark:bg-amber-900/40
                        `
                        : completed
                        ? `
                          bg-green-100

                          dark:bg-green-900/40
                        `
                        : `
                          bg-slate-100

                          dark:bg-slate-700
                        `
                    }
                  `}
                >
                  {isProcessing ? (
                    <Loader2
                      size={20}
                      className="animate-spin text-amber-600 dark:text-amber-400"
                    />
                  ) : (
                    <Icon
                      size={20}
                      className={
                        completed
                          ? "text-green-600 dark:text-green-400"
                          : "text-slate-500 dark:text-slate-300"
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
                          ? "text-amber-700 dark:text-amber-300"
                          : completed
                          ? "text-green-700 dark:text-green-300"
                          : "text-slate-800 dark:text-slate-100"
                      }
                    `}
                  >
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
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