"use client";

import { Sparkles, Database } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function DashboardHero() {
  return (
    <Card className="overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-4 flex items-center gap-3">

            <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">
              <Database size={30} />
            </div>

            <Badge variant="info">
              Beta v1.0
            </Badge>

          </div>

          <h1 className="text-4xl font-bold">
            GrowEasy AI Importer
          </h1>

          <p className="mt-3 max-w-2xl text-blue-100 text-lg">
            Upload any CSV and let AI intelligently transform it into
            clean, CRM-ready records within seconds.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <Badge variant="gray">
              Excel
            </Badge>

            <Badge variant="gray">
              Facebook Leads
            </Badge>

            <Badge variant="gray">
              Google Ads
            </Badge>

            <Badge variant="gray">
              HubSpot
            </Badge>

            <Badge variant="gray">
              Zoho CRM
            </Badge>

          </div>

        </div>

        <div className="hidden lg:flex">

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <Sparkles
              size={90}
              className="animate-pulse"
            />

          </div>

        </div>

      </div>

    </Card>
  );
}