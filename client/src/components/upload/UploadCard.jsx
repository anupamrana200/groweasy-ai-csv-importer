"use client";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

import DropZone from "./DropZone";
import FileInfo from "./FileInfo";

export default function UploadCard({
  selectedFile,
  handleFileSelect,
  removeFile,
}) {
  return (
    <Card hover>

      <SectionTitle
        title="Upload CSV"
        subtitle="Upload any CSV exported from Facebook Leads, Google Ads, Excel or your CRM."
      />

      <DropZone
        onFileSelect={handleFileSelect}
      />

      <FileInfo
        file={selectedFile}
        onRemove={removeFile}
      />

    </Card>
  );
}