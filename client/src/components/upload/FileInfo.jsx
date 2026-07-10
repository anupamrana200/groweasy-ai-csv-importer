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

        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-green-100 p-3">
          <FileSpreadsheet
            className="text-green-600"
            size={28}
          />
        </div>

        <div>

          <div className="flex items-center gap-2">

            <h4 className="font-semibold text-slate-900">
              {file.name}
            </h4>

            <CheckCircle2
              size={18}
              className="text-green-600"
            />

          </div>

          <p className="text-sm text-slate-500">
            {(size)} MB • Ready for import
          </p>

        </div>

      </div>

      <Button
        variant="danger"
        size="sm"
        onClick={onRemove}
      >
        <Trash2
          size={16}
          className="mr-2"
        />

        Remove
      </Button>

    </div>
  );
}