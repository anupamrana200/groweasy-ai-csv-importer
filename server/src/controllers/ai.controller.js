const runAI = require("../services/ai/aiManager.service");
const buildPrompt = require("../prompts/crmExtraction.prompt");
const validateAiResponse = require("../validators/aiResponse.validator");

exports.testAI = async (req, res) => {
  try {
    const { provider = "auto" } = req.body;

    // Sample Record
    const record = {
      "Lead Name": "John Doe",
      "Email Address": "john.doe@gmail.com",
      "Contact Number": "+91 9876543210",
      "Remarks": "Customer requested callback tomorrow.",
    };

    // Dataset Analysis
    const analysis = {
      headers: Object.keys(record),
      totalColumns: Object.keys(record).length,
      totalRows: 1,
    };

    // Build Prompt
    const prompt = buildPrompt({
      record,
      analysis,
    });

    // Run AI
    const aiResult = await runAI(prompt, provider);

    // Validate JSON
    const crmRecord = validateAiResponse(aiResult.response);

    return res.status(200).json({
      success: true,
      provider: aiResult.provider,
      fallback: aiResult.fallback || false,
      crmRecord,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};