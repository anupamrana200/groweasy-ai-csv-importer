"use client";

import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import UploadSection from "@/components/sections/UploadSection";
import PreviewSection from "@/components/sections/PreviewSection";
import ImportAction from "@/components/import/ImportAction";

import useCsvUpload from "@/hooks/useCsvUpload";
import useImportProgress from "@/hooks/useImportProgress";

export default function Home() {
  const {
    selectedFile,
    parsedData,
    headers,
    isParsing,

    handleFileSelect,
    removeFile,

    handleImport,
    isImporting,

    crmRecords,
    importResult,

    resetImport,
  } = useCsvUpload();

  // Live Progress
  const progress = useImportProgress(isImporting);

  const workflowState = {
    uploaded: !!selectedFile,
    previewed: parsedData.length > 0,
    processing: isImporting,
    processed: crmRecords.length > 0,
    results: crmRecords.length > 0,
  };

  return (
    <MainLayout>
      <Header />

      <div className="mx-auto flex max-w-7xl gap-6 p-6">

        <Sidebar workflowState={workflowState} />

        <main className="flex-1 rounded-2xl bg-white p-10 shadow-sm">

          <UploadSection
            selectedFile={selectedFile}
            handleFileSelect={handleFileSelect}
            removeFile={removeFile}
          />

          <PreviewSection
            parsedData={parsedData}
            headers={headers}
            isParsing={isParsing}
            crmRecords={crmRecords}
          />

          <ImportAction
            parsedData={parsedData}
            handleImport={handleImport}
            isImporting={isImporting}
            importResult={importResult}
            resetImport={resetImport}
            progress={progress}
          />

        </main>

      </div>
    </MainLayout>
  );
}