"use client";

import { useRef, useState } from "react";
import { UploadCloud, FileUp } from "lucide-react";

export default function DropZone({ onFileSelect }) {
  const inputRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const handleFiles = (files) => {
    if (!files || !files.length) return;

    const file = files[0];

    if (!file.name.toLowerCase().endsWith(".csv")) {
      alert("Please upload a CSV file.");
      return;
    }

    onFileSelect(file);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setDragging(false);

    handleFiles(e.dataTransfer.files);
  };

  return (
    <>
      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".csv"
        onChange={handleChange}
      />

      <div
        onClick={openFilePicker}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          cursor-pointer

          rounded-2xl

          border-2

          border-dashed

          transition-all

          duration-300

          ${
            dragging
              ? `
                scale-[1.02]
                border-blue-600
                bg-blue-50
                shadow-lg
              `
              : `
                border-slate-300
                bg-white
                hover:border-blue-500
                hover:bg-blue-50
              `
          }

          flex
          min-h-[320px]
          flex-col
          items-center
          justify-center

          px-8
          py-12
        `}
      >
        {dragging ? (
          <FileUp
            size={70}
            className="animate-bounce text-blue-600"
          />
        ) : (
          <UploadCloud
            size={70}
            className="text-blue-600"
          />
        )}

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {dragging
            ? "Drop your CSV here"
            : "Drag & Drop your CSV"}
        </h3>

        <p className="mt-2 text-center text-slate-500">
          {dragging
            ? "Release to upload"
            : "or click to browse files"}
        </p>

        <div className="mt-6 rounded-xl bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700">
          CSV only • Max 25 MB
        </div>
      </div>
    </>
  );
}