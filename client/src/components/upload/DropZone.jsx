"use client";

export default function DropZone({ onFileSelect }) {
  const handleChange = (event) => {
    console.log("🔥 Input Changed");

    const file = event.target.files[0];

    console.log("Selected File:", file);

    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <input
      type="file"
      accept=".csv"
      onChange={handleChange}
    />
  );
}