"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function useCsvUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    if (!file) return;

    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      toast.error("Please select a valid CSV file.");
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return {
    selectedFile,
    handleFileSelect,
    removeFile,
  };
}