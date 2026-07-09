const runAI = require("./aiManager.service");
const validateAiResponse = require("../../validators/aiResponse.validator");
const buildPrompt = require("../../prompts/crmExtraction.prompt");

const processWorkerPool = async ({
  records,
  analysis,
  provider = "auto",
  concurrency = 5,
}) => {

  const results = [];

  let currentIndex = 0;

  async function worker() {

    while (currentIndex < records.length) {

      const index = currentIndex++;

      const record = records[index];

      console.log(
        `Worker processing record ${index + 1}/${records.length}`
      );

      try {

        const prompt = buildPrompt({
          record,
          analysis,
        });

        const aiResult = await runAI(
          prompt,
          provider
        );

        results[index] =
          validateAiResponse(aiResult.response);

      } catch (error) {

        console.error(
          `Failed record ${index + 1}`,
          error.message
        );

        results[index] = {
          error: true,
          message: error.message,
        };

      }

    }

  }

  const workers = [];

  for (let i = 0; i < concurrency; i++) {
    workers.push(worker());
  }

  await Promise.all(workers);

  return results;

};

module.exports = processWorkerPool;