const normalizeRecords = (records) => {
  return records.map((record) => {
    const normalized = {};

    Object.entries(record).forEach(([key, value]) => {
      const cleanKey = key.trim();

      const cleanValue =
        typeof value === "string"
          ? value.trim()
          : value;

      normalized[cleanKey] = cleanValue;
    });

    return normalized;
  });
};

module.exports = normalizeRecords;