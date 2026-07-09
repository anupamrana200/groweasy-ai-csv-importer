const processBatch = require("./processBatch.service");
const aiConfig = require("../../config/ai.config");

const {
  initializeProgress,
  updateProgress,
  completeProgress,
  failProgress,
} = require("./progress.service");

const processAllBatches = async ({
  batches,
  analysis,
  provider = "auto",
}) => {
  const batchResults = new Array(batches.length);

  let currentBatch = 0;

  const workerCount = Math.min(
    aiConfig.maxConcurrentBatches,
    batches.length
  );

  initializeProgress({
    totalRecords: batches.flat().length,
    totalBatches: batches.length,
    workers: workerCount,
    provider,
  });

  async function worker(workerId) {
    while (true) {
      const batchIndex = currentBatch++;

      if (batchIndex >= batches.length) {
        break;
      }

      const batch = batches[batchIndex];

      console.log(
        `🟢 Worker ${workerId} → Batch ${batchIndex + 1}/${batches.length}`
      );

      try {
        const crmRecords = await processBatch(
          batch,
          analysis,
          provider
        );

        batchResults[batchIndex] = crmRecords;

        updateProgress({
          processedRecords: crmRecords.length,
          completedBatches: 1,
        });

        console.log(
          `✅ Worker ${workerId} completed Batch ${batchIndex + 1}`
        );

      } catch (error) {

        console.error(
          `❌ Worker ${workerId} failed Batch ${batchIndex + 1}`
        );

        console.error(error.message);

        // Preserve order even if this batch fails
        batchResults[batchIndex] = [];

        // Still update progress so UI doesn't get stuck
        updateProgress({
          processedRecords: batch.length,
          completedBatches: 1,
        });

      }
    }
  }

  try {

    const workers = [];

    for (let i = 1; i <= workerCount; i++) {
      workers.push(worker(i));
    }

    await Promise.all(workers);

    completeProgress();

    return batchResults.flat();

  } catch (error) {

    failProgress();

    throw error;

  }
};

module.exports = processAllBatches;