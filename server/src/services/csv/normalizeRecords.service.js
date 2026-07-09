const normalizeRecords = (records) => {
  return records.map((record, index) => {
    const normalized = {
      _meta: {
        rowId: index + 1,
      },
    };

    Object.entries(record).forEach(([key, value]) => {
      const cleanKey =
        typeof key === "string"
          ? key.trim()
          : key;

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