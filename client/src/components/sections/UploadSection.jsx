"use client";

import UploadCard from "../upload/UploadCard";

export default function UploadSection({
  selectedFile,
  handleFileSelect,
  removeFile,

  handleImport,
  isImporting,
}) {
  return (
  <UploadCard
    selectedFile={selectedFile}
    handleFileSelect={handleFileSelect}
    removeFile={removeFile}
    handleImport={handleImport}
    isImporting={isImporting}
  />
  );
}