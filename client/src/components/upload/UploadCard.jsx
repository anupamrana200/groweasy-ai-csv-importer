"use client";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { UploadCloud } from "lucide-react";

import DropZone from "./DropZone";
import FileInfo from "./FileInfo";


export default function UploadCard({
  selectedFile,
  handleFileSelect,
  removeFile,
  handleImport,
  isImporting,
}) {
  return (
    <Card>
      <SectionTitle
        title="Upload CSV"
        subtitle="Upload any CSV exported from Facebook, Google Ads, Excel, or any CRM."
      />

      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 transition hover:border-blue-500 hover:bg-blue-50 hover:border-blue-500">
        
        <UploadCloud
          size={60}
          className="text-blue-600"
        />

        <h3 className="mt-6 text-xl font-bold text-slate-800">
          Drag & Drop your CSV
        </h3>

        <p className="mt-2 text-center text-slate-600">
          or click below to browse your files
        </p>

        <div className="mt-8">
          <DropZone onFileSelect={handleFileSelect} />
        </div>
      </div>

      {/* Selected File Information */}
      <div className="mt-6">
        <FileInfo
          file={selectedFile}
          onRemove={removeFile}
        />
      </div>
    </Card>
  );
}