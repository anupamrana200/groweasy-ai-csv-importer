"use client";

import {
  Database,
  Sparkles,
} from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function Header() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-white/30
      bg-white/80
      backdrop-blur-xl
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div className="flex items-center gap-4">

          <div
            className="
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            to-indigo-600
            p-3
            text-white
            shadow-lg
            "
          >
            <Database size={28} />
          </div>

          <div>

            <div className="flex items-center gap-3">

              <h1 className="text-2xl font-bold text-slate-900">
                GrowEasy AI Importer
              </h1>

              <Badge variant="info">
                Beta v1.0
              </Badge>

            </div>

            <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <Sparkles size={15} />

              AI-powered CRM Import Platform
            </p>

          </div>

        </div>

        <Badge variant="gray">
          Dashboard
        </Badge>

      </div>
    </header>
  );
}