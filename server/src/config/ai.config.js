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

  // AI Batch Settings
  batchSize: 5,

  // Maximum batches processed simultaneously
  maxConcurrentBatches: 5,

  // Retry failed AI requests
  maxRetries: 2,

  // Request timeout (milliseconds)
  requestTimeout: 30000,
};