const REQUIRED_FIELDS = [
  "_meta",
  "created_at",
  "name",
  "email",
  "country_code",
  "mobile_without_country_code",
  "company",
  "city",
  "state",
  "country",
  "lead_owner",
  "crm_status",
  "crm_note",
  "data_source",
  "possession_time",
  "description",
];

const validateBatchResponse = (
  responseText,
  expectedRecords
) => {
  // =====================================
  // Clean AI response before parsing JSON
  // =====================================

  let cleaned = responseText.trim();

  // Remove markdown code fences
  cleaned = cleaned
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  // Extract only the JSON array if extra text exists
  const firstBracket = cleaned.indexOf("[");
  const lastBracket = cleaned.lastIndexOf("]");

  if (firstBracket !== -1 && lastBracket !== -1) {
    cleaned = cleaned.substring(firstBracket, lastBracket + 1);
  }

  let parsed;

  try {
    parsed = JSON.parse(cleaned);
  } catch (error) {
    console.error("Failed to parse AI response:");
    console.error(cleaned);

    throw new Error("AI returned invalid JSON.");
  }

  if (!Array.isArray(parsed)) {
    throw new Error("AI must return a JSON array.");
  }

  if (parsed.length !== expectedRecords.length) {
    throw new Error(
      `Expected ${expectedRecords.length} records but received ${parsed.length}.`
    );
  }

  const seenRowIds = new Set();

  parsed.forEach((record, index) => {
    if (!record._meta) {
      throw new Error(
        `Record ${index + 1} is missing _meta.`
      );
    }

    if (typeof record._meta.rowId !== "number") {
      throw new Error(
        `Record ${index + 1} has an invalid rowId.`
      );
    }

    if (seenRowIds.has(record._meta.rowId)) {
      throw new Error(
        `Duplicate rowId ${record._meta.rowId}.`
      );
    }

    seenRowIds.add(record._meta.rowId);

    REQUIRED_FIELDS.forEach((field) => {
      if (!(field in record)) {
        throw new Error(
          `Record ${record._meta.rowId} is missing "${field}".`
        );
      }
    });
  });

  return parsed;
};

module.exports = validateBatchResponse;