"use client";

import Badge from "../ui/Badge";

export default function StatusBadge({ status }) {
  const value = (status || "").toLowerCase();

  if (
    value.includes("qualified") ||
    value.includes("success")
  ) {
    return (
      <Badge variant="success">
        {status || "Qualified"}
      </Badge>
    );
  }

  if (
    value.includes("new") ||
    value.includes("pending")
  ) {
    return (
      <Badge variant="warning">
        {status || "Pending"}
      </Badge>
    );
  }

  if (
    value.includes("invalid") ||
    value.includes("failed") ||
    value.includes("rejected")
  ) {
    return (
      <Badge variant="danger">
        {status || "Failed"}
      </Badge>
    );
  }

  if (
    value.includes("processing") ||
    value.includes("running")
  ) {
    return (
      <Badge variant="info">
        {status}
      </Badge>
    );
  }

  return (
    <Badge variant="gray">
      {status || "Unknown"}
    </Badge>
  );
}