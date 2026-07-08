import {
  Upload,
  Table,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

const workflow = [
  {
    title: "Upload",
    icon: Upload,
  },
  {
    title: "Preview",
    icon: Table,
  },
  {
    title: "AI Processing",
    icon: BrainCircuit,
  },
  {
    title: "Results",
    icon: CheckCircle2,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-bold text-slate-800">
        Workflow
      </h2>

      <div className="space-y-4">
        {workflow.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
            >
              <Icon
                size={20}
                className="text-blue-600"
              />

              <span className="font-medium text-slate-700">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}