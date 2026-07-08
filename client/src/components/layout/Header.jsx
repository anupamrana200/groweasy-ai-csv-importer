import { Database } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <Database size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              GrowEasy AI Importer
            </h1>

            <p className="text-xs text-slate-500">
              AI Powered CSV to CRM Import
            </p>
          </div>
        </div>

        <div className="text-sm text-slate-500">
          Dashboard
        </div>
      </div>
    </header>
  );
}