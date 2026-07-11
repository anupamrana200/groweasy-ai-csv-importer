"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

export default function CRMTableRow({
  record,
  index,
}) {
  const [expanded, setExpanded] = useState(false);

  if (!record) return null;

  return (
    <>
      {/* ===========================
          Main Row
      =========================== */}

      <tr
        onClick={() => setExpanded(!expanded)}
        className={`
          cursor-pointer
          transition-all
          duration-200

          hover:bg-blue-50
          dark:hover:bg-slate-800

          ${
            expanded
              ? "bg-blue-50 dark:bg-slate-800"
              : index % 2 === 0
              ? "bg-white dark:bg-slate-900"
              : "bg-slate-50/60 dark:bg-slate-950"
          }
        `}
      >
        <td className="border-b border-slate-200 px-4 py-4 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-400">
          {index + 1}
        </td>

        <td className="border-b border-slate-200 px-4 py-4 text-sm font-semibold text-slate-900 dark:border-slate-700 dark:text-white">
          {record.name || "-"}
        </td>

        <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300">
          {record.email || "-"}
        </td>

        <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300">
          {record.mobile_without_country_code || "-"}
        </td>

        <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300">
          {record.city || "-"}
        </td>

        <td className="border-b border-slate-200 px-4 py-4 dark:border-slate-700">
          <StatusBadge status={record.crm_status} />
        </td>

        <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300">
          {record.data_source || "-"}
        </td>

        <td className="border-b border-slate-200 px-4 py-4 text-center dark:border-slate-700">

          <div
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              p-2
              transition-all
              duration-200
            "
          >
            {expanded ? (
              <ChevronUp
                className="
                  h-5
                  w-5
                  text-blue-600
                  transition-transform
                  duration-300
                  dark:text-blue-400
                "
              />
            ) : (
              <ChevronDown
                className="
                  h-5
                  w-5
                  text-slate-500
                  transition-transform
                  duration-300
                  dark:text-slate-400
                "
              />
            )}
          </div>

        </td>
      </tr>

      {/* ===========================
          Expanded Details
      =========================== */}

      <AnimatePresence>

        {expanded && (

          <tr>

            <td
              colSpan={8}
              className="border-b border-slate-200 p-0 dark:border-slate-700"
            >

              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  overflow-hidden
                  bg-slate-50
                  px-8
                  py-6
                  dark:bg-slate-800/40
                "
              >

                <div className="grid gap-6 md:grid-cols-2">

                  <Info
                    label="Created At"
                    value={record.created_at}
                  />

                  <Info
                    label="Company"
                    value={record.company}
                  />

                  <Info
                    label="Country Code"
                    value={record.country_code}
                  />

                  <Info
                    label="State"
                    value={record.state}
                  />

                  <Info
                    label="Country"
                    value={record.country}
                  />

                  <Info
                    label="Lead Owner"
                    value={record.lead_owner}
                  />

                  <Info
                    label="Possession Time"
                    value={record.possession_time}
                  />

                </div>

                <div className="mt-6">

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    CRM Note
                  </h4>

                  <p className="mt-2 whitespace-pre-wrap rounded-xl bg-white p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    {record.crm_note || "-"}
                  </p>

                </div>

                <div className="mt-6">

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Description
                  </h4>

                  <p className="mt-2 whitespace-pre-wrap rounded-xl bg-white p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                    {record.description || "-"}
                  </p>

                </div>

              </motion.div>

            </td>

          </tr>

        )}

      </AnimatePresence>
    </>
  );
}

function Info({
  label,
  value,
}) {
  return (
    <div>

      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-1 font-medium text-slate-900 dark:text-white">
        {value || "Not Available"}
      </p>

    </div>
  );
}