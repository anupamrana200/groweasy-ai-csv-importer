"use client";

import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import UploadSection from "@/components/sections/UploadSection";
import PreviewSection from "@/components/sections/PreviewSection";
import useCsvUpload from "@/hooks/useCsvUpload";
import ImportAction from "@/components/import/ImportAction";

export default function Home() {
  const {
  selectedFile,
  parsedData,
  headers,
  isParsing,
  parseError,
  handleFileSelect,
  removeFile,
  } = useCsvUpload();
  return (
    <MainLayout>
      <Header />

      <div className="mx-auto flex max-w-7xl gap-6 p-6">

        <Sidebar />

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
          />
          <ImportAction
            parsedData={parsedData}
          />
        </main>

      </div>
    </MainLayout>
  );
}