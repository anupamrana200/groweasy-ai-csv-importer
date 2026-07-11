const buildBatchPrompt = require("../../prompts/crmBatchExtraction.prompt");
const runAI = require("./aiManager.service");
const validateBatchResponse = require("../../validators/aiResponse.validator");

const processBatch = async (
  batch,
  analysis,
  provider = "auto"
) => {
  const batchLabel = `AI Batch ${batch[0]._meta.rowId}`;

  console.time(batchLabel);

  try {
    // Build one prompt for the whole batch
    const prompt = buildBatchPrompt({
      records: batch,
      analysis,
    });

    // AI request
    const aiResult = await runAI(prompt, provider);

    // Validate response
    const crmRecords = validateBatchResponse(
      aiResult.response,
      batch
    );

    console.timeEnd(batchLabel);

    return crmRecords;

  } catch (error) {

    console.timeEnd(batchLabel);

    console.error(
      `❌ ${batchLabel} failed:`,
      error.message
    );

    throw error;
  }
};

module.exports = processBatch;