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
        {status}
      </Badge>
    );
  }

  if (
    value.includes("new") ||
    value.includes("pending")
  ) {
    return (
      <Badge variant="warning">
        {status}
      </Badge>
    );
  }

  if (
    value.includes("invalid") ||
    value.includes("failed")
  ) {
    return (
      <Badge variant="danger">
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