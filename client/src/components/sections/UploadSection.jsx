"use client";

import UploadCard from "../upload/UploadCard";

export default function UploadSection({
  selectedFile,
  handleFileSelect,
  removeFile,
}) {
  return (
    <UploadCard
      selectedFile={selectedFile}
      handleFileSelect={handleFileSelect}
      removeFile={removeFile}
    />
  );
}