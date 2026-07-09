"use client";

import { importCsv } from "@/services/import.service";
import { useState } from "react";
import Papa from "papaparse";
import { toast } from "sonner";
const [crmRecords, setCrmRecords] = useState([]);
const [isImporting, setIsImporting] = useState(false);
const [importResult, setImportResult] = useState(null);

export default function useCsvUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [isParsing, setIsParsing] = useState(false);
  const [parseError, setParseError] = useState(null);

  // Validate uploaded file
  const validateFile = (file) => {
    if (!file) return false;

    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      toast.error("Please select a valid CSV file.");
      return false;
    }

    return true;
  };

  // Parse CSV using PapaParse
  const parseCsv = (file) => {
    console.log("📄 parseCsv called");

    setIsParsing(true);
    setParseError(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        console.log("Parsed CSV Data:", results.data);

        setParsedData(results.data);
        setHeaders(results.meta.fields || []);
        setIsParsing(false);

        toast.success("CSV parsed successfully!");
      },

      error: (error) => {
        console.error(error);

        setParseError(error.message);
        setIsParsing(false);

        toast.error("Failed to parse CSV.");
      },
    });
  };

  // Handle file selection
  const handleFileSelect = (file) => {
    console.log("📁 handleFileSelect called");
    console.log(file);

    if (!validateFile(file)) {
      console.log("❌ Validation Failed");
      return;
    }

    console.log("✅ Validation Passed");

    setSelectedFile(file);

    console.log("🚀 Starting PapaParse");

    parseCsv(file);
  };

  // Remove selected file
  const removeFile = () => {
    setSelectedFile(null);
    setParsedData([]);
    setHeaders([]);
    setParseError(null);
  };

  const handleImport = async () => {
  if (!selectedFile) return;

  try {
    setIsImporting(true);

    const formData = new FormData();
    formData.append("csv", selectedFile);

    const result = await importCsv(formData);

    setImportResult(result);
    setCrmRecords(result.crmRecords || []);

  } catch (error) {
    console.error(error);
  } finally {
    setIsImporting(false);
  }
};

  return {
    selectedFile,
    parsedData,
    headers,
    isParsing,
    parseError,
    handleFileSelect,
    removeFile,
  };
}