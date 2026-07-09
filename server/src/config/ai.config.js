module.exports = {
  defaultProvider: "auto",

  providers: {
    gemini: {
      enabled: true,
      model: "gemini-2.5-flash",
    },

    openai: {
      enabled: true,
      model: "gpt-5",
    },
  },

  batchSize: 50,

  maxRetries: 2,
};