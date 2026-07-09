"use client";

import { useEffect, useState } from "react";
import { getImportProgress } from "@/services/progress.service";

export default function useImportProgress(isImporting) {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (!isImporting) return;

    const interval = setInterval(async () => {
      try {
        const result = await getImportProgress();
        setProgress(result.progress);
      } catch (error) {
        console.error(error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isImporting]);

  return progress;
}