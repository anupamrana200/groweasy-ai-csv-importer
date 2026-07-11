"use client";

import { importCsv } from "@/services/import.service";
import { useState } from "react";
import Papa from "papaparse";
import { toast } from "sonner";

export default function useCsvUpload() {
  // ==========================================
  // Upload State
  // ==========================================

  const [selectedFile, setSelectedFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [isParsing, setIsParsing] = useState(false);
  const [parseError, setParseError] = useState(null);

  // ==========================================
  // Import State
  // ==========================================

  const [crmRecords, setCrmRecords] = useState([]);
  const [skippedRecords, setSkippedRecords] = useState([]);
  const [summary, setSummary] = useState(null);

  const [isImporting, setIsImporting] = useState(false);
  const [importResult, setImportResult] = useState(null);

  // ==========================================
  // Validate CSV
  // ==========================================

  const validateFile = (file) => {
    if (!file) return false;

    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      toast.error("Please select a valid CSV file.");
      return false;
    }

    return true;
  };

  // ==========================================
  // Parse CSV
  // ==========================================

  const parseCsv = (file) => {
    setIsParsing(true);
    setParseError(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
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

  // ==========================================
  // Select File
  // ==========================================

  const handleFileSelect = (file) => {
    if (!validateFile(file)) return;

    setSelectedFile(file);

    parseCsv(file);
  };

  // ==========================================
  // Remove File
  // ==========================================

  const removeFile = () => {
    setSelectedFile(null);

    setParsedData([]);
    setHeaders([]);
    setParseError(null);

    setCrmRecords([]);
    setSkippedRecords([]);
    setSummary(null);

    setImportResult(null);
  };

  // ==========================================
  // Reset Import
  // ==========================================

  const resetImport = () => {
    setSelectedFile(null);

    setParsedData([]);
    setHeaders([]);
    setParseError(null);

    setCrmRecords([]);
    setSkippedRecords([]);
    setSummary(null);

    setImportResult(null);

    setIsImporting(false);
  };

  // ==========================================
  // Import CSV
  // ==========================================

  const handleImport = async (provider = "auto") => {
    if (!selectedFile) return;

    try {
      setIsImporting(true);

      const formData = new FormData();

      formData.append("csv", selectedFile);

      const result = await importCsv(formData, provider);

      setImportResult(result);

      setSummary(result.summary || null);

      setCrmRecords(result.crmRecords || []);

      setSkippedRecords(result.skippedRecords || []);

      toast.success("AI import completed successfully!");
    } catch (error) {
      console.error(error);

      toast.error(
        error?.message || "Import failed."
      );
    } finally {
      setIsImporting(false);
    }
  };

  return {
    // Upload

    selectedFile,
    parsedData,
    headers,
    isParsing,
    parseError,

    handleFileSelect,
    removeFile,

    // Import

    crmRecords,
    skippedRecords,
    summary,

    importResult,
    isImporting,

    handleImport,
    resetImport,
  };
}