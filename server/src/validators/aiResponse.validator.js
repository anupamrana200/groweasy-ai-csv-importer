const validateAiResponse = (responseText) => {
  try {
    const parsedData = JSON.parse(responseText);

    return parsedData;
  } catch (error) {
    throw new Error("AI returned invalid JSON.");
  }
};

module.exports = validateAiResponse;