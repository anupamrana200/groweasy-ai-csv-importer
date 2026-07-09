const generateWithGemini = require("./gemini.service");
const generateWithOpenAI = require("./openai.service");

const runAI = async (prompt, provider = "auto") => {

  if (provider === "gemini") {
    return {
      provider: "Gemini",
      response: await generateWithGemini(prompt),
    };
  }

  if (provider === "openai") {
    return {
      provider: "OpenAI",
      response: await generateWithOpenAI(prompt),
    };
  }

 try {
  return {
    provider: "Gemini",
    response: await generateWithGemini(prompt),
  };
} catch (error) {

  console.error("❌ Gemini failed:");
  console.error(error);

  console.log("🔄 Falling back to OpenAI...");

  return {
    provider: "OpenAI",
    response: await generateWithOpenAI(prompt),
    fallback: true,
  };
  }
};

module.exports = runAI;