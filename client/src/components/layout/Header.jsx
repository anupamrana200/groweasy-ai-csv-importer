"use client";

import {
  Database,
  Sparkles,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b

        border-slate-200/70
        bg-white/80

        backdrop-blur-xl

        transition-all
        duration-300

        dark:border-slate-700/70
        dark:bg-slate-950/80
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Left */}

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

              <h1
                className="
                  text-2xl
                  font-bold
                  text-slate-900

                  dark:text-white
                "
              >
                GrowEasy AI Platform
              </h1>

              <Badge variant="info">
                Beta v1.0
              </Badge>

            </div>

            <p
              className="
                mt-1
                flex
                items-center
                gap-2

                text-sm

                text-slate-500

                dark:text-slate-400
              "
            >
              <Sparkles size={15} />

              AI-powered CRM Import Platform
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <ThemeToggle />

        </div>

      </div>
    </header>
  );
}