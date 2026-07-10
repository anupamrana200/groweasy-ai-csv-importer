"use client";

import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

import DashboardHero from "@/components/dashboard/DashboardHero";
import QuickStats from "@/components/dashboard/QuickStats";

import UploadSection from "@/components/sections/UploadSection";
import PreviewSection from "@/components/sections/PreviewSection";
import ImportAction from "@/components/import/ImportAction";

import PageContainer from "@/components/ui/PageContainer";
import Section from "@/components/ui/Section";

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

      <PageContainer>

        <div
          className="
            flex
            min-w-0
            flex-col
            gap-8
            lg:flex-row
            lg:items-start
          "
        >
          <Sidebar workflowState={workflowState} />

          <main
            className="
              flex-1
              min-w-0
              overflow-hidden
              space-y-8
            "
          >
            <Section>
              <DashboardHero />
            </Section>

            <Section>
              <QuickStats
                selectedFile={selectedFile}
                parsedData={parsedData}
                isImporting={isImporting}
                importResult={importResult}
              />
            </Section>

            <Section>
              <UploadSection
                selectedFile={selectedFile}
                handleFileSelect={handleFileSelect}
                removeFile={removeFile}
              />
            </Section>

            <Section>
              <PreviewSection
                parsedData={parsedData}
                headers={headers}
                isParsing={isParsing}
                crmRecords={crmRecords}
              />
            </Section>

            <Section>
              <ImportAction
                parsedData={parsedData}
                handleImport={handleImport}
                isImporting={isImporting}
                importResult={importResult}
                resetImport={resetImport}
                progress={progress}
              />
            </Section>

          </main>
        </div>

      </PageContainer>
    </MainLayout>
  );
}