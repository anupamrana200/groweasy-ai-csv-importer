const parseCsv = require("../services/csv/parseCsv.service");
const normalizeRecords = require("../services/csv/normalizeRecords.service");

const createBatches = require("../services/ai/batch.service");
const processBatch = require("../services/ai/processBatch.service");

exports.importCsv = async (req, res) => {
  try {
    // Check if a CSV file was uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a CSV file.",
      });
    }

    // Parse CSV
    const rawRecords = await parseCsv(req.file.path);

    // Normalize records
    const normalizedRecords = normalizeRecords(rawRecords);

    // Create batches
    const batches = createBatches(normalizedRecords);

    if (!batches.length || !batches[0].length) {
      return res.status(400).json({
        success: false,
        message: "No valid records found.",
      });
    }

    // Dataset analysis
    const analysis = {
      headers: Object.keys(normalizedRecords[0]),
      totalColumns: Object.keys(normalizedRecords[0]).length,
      totalRows: normalizedRecords.length,
    };

    // Process only the first batch (for now)
    const crmRecords = await processBatch(
      batches[0],
      analysis,
      "auto"
    );

    return res.status(200).json({
      success: true,
      provider: "auto",
      totalRecords: crmRecords.length,
      crmRecords,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};