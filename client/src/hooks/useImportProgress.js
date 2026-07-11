"use client";

import { useEffect, useRef, useState } from "react";
import { getImportProgress } from "@/services/progress.service";

const AI_MESSAGES = [
  "Analyzing CSV structure...",
  "Understanding your data...",
  "Mapping CRM fields...",
  "Extracting contacts...",
  "Detecting duplicate information...",
  "Building CRM records...",
  "Validating extracted fields...",
  "Preparing final preview...",
];

export default function useImportProgress(isImporting) {
  const [progress, setProgress] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const fakeProgress = useRef(0);

  // -----------------------------------------
  // Rotate AI messages
  // -----------------------------------------

  useEffect(() => {
    if (!isImporting) {
      setMessageIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % AI_MESSAGES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isImporting]);

  // -----------------------------------------
  // Poll backend + simulate progress
  // -----------------------------------------

  useEffect(() => {
      if (!isImporting) {
        fakeProgress.current = 0;
        return;
      }

    const interval = setInterval(async () => {
      try {
        const result = await getImportProgress();

        const backend = result.progress;

        // Smooth fake progress until backend catches up
        if (
          backend.status !== "completed" &&
          fakeProgress.current < 95
        ) {
          let increment = 0;

          if (fakeProgress.current < 20) increment = 3;
          else if (fakeProgress.current < 40) increment = 2;
          else if (fakeProgress.current < 60) increment = 1.5;
          else if (fakeProgress.current < 80) increment = 1;
          else increment = 0.4;

          fakeProgress.current += increment;
        }

        // Never display less than backend progress
        const displayPercentage = Math.max(
          backend.percentage || 0,
          Math.round(fakeProgress.current)
        );

        if (backend.status === "completed") {
          fakeProgress.current = 100;
        }

        setProgress({
          ...backend,
          percentage:
            backend.status === "completed"
              ? 100
              : Math.min(displayPercentage, 95),

          displayMessage:
            backend.status === "completed"
              ? "Import completed successfully!"
              : AI_MESSAGES[messageIndex],
        });
      } catch (error) {
        console.error(error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isImporting, messageIndex]);

  return progress;
}