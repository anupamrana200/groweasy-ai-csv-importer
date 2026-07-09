const buildPrompt = require("../../prompts/crmExtraction.prompt");
const runAI = require("./aiManager.service");
const validateAiResponse = require("../../validators/aiResponse.validator");

const processBatch = async (batch, analysis, provider = "auto") => {
  const crmRecords = [];

  for (const record of batch) {
    const prompt = buildPrompt({
      record,
      analysis,
    });

    const aiResult = await runAI(prompt, provider);

    const crmRecord = validateAiResponse(aiResult.response);

    crmRecords.push(crmRecord);
  }

  return crmRecords;
};

module.exports = processBatch;