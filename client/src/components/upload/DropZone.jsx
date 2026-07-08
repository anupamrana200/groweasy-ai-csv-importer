"use client";

export default function DropZone({
  onFileSelect,
}) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <input
      type="file"
      accept=".csv"
      onChange={handleChange}
    />
  );
}