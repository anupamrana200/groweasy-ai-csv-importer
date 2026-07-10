"use client";

import {
  FileSpreadsheet,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import Button from "../ui/Button";

export default function FileInfo({
  file,
  onRemove,
}) {
  if (!file) return null;

  const size = (file.size / 1024 / 1024).toFixed(2);

  return (
    <div
      className="
        mt-6

        flex
        flex-col
        gap-4

        rounded-2xl

        border

        border-green-200
        bg-green-50

        p-5

        transition-colors

        md:flex-row
        md:items-center
        md:justify-between

        dark:border-green-900
        dark:bg-green-950/20
      "
    >
      <div className="flex items-center gap-4">

        <div
          className="
            rounded-xl

            bg-green-100

            p-3

            dark:bg-green-900/40
          "
        >
          <FileSpreadsheet
            className="text-green-600 dark:text-green-400"
            size={28}
          />
        </div>

        <div>

          <div className="flex items-center gap-2">

            <h4 className="font-semibold text-slate-900 dark:text-white">
              {file.name}
            </h4>

            <CheckCircle2
              size={18}
              className="text-green-600 dark:text-green-400"
            />

          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {size} MB • Ready for import
          </p>

        </div>

      </div>

      <Button
        variant="danger"
        size="sm"
        onClick={onRemove}
        className="flex items-center gap-2"
      >
        <Trash2 size={16} />
        <span>Remove</span>
      </Button>
    </div>
  );
}