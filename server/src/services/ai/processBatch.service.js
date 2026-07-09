const processWorkerPool = require("./workerPool.service");

const processBatch = async (
  batch,
  analysis,
  provider = "auto"
) => {

  return await processWorkerPool({
    records: batch,
    analysis,
    provider,
    concurrency: 5,
  });

};

module.exports = processBatch;