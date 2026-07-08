"use client";

import UploadCard from "../upload/UploadCard";
import useCsvUpload from "@/hooks/useCsvUpload";

export default function UploadSection() {
  const {
    selectedFile,
    handleFileSelect,
    removeFile,
  } = useCsvUpload();

  return (
    <UploadCard
      selectedFile={selectedFile}
      handleFileSelect={handleFileSelect}
      removeFile={removeFile}
    />
  );
}