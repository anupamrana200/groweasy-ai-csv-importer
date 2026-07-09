const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateWithOpenAI = async (prompt) => {
  const response = await client.responses.create({
    model: "gpt-5",
    input: prompt,
  });

  return response.output_text;
};

module.exports = generateWithOpenAI;