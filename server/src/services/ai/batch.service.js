const aiConfig = require("../../config/ai.config");

const createBatches = (records) => {
  const batches = [];

  for (
    let i = 0;
    i < records.length;
    i += aiConfig.batchSize
  ) {
    batches.push(
      records.slice(i, i + aiConfig.batchSize)
    );
  }

  return batches;
};

module.exports = createBatches;