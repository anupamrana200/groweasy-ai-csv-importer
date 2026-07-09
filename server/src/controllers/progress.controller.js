const {
  getProgress,
} = require("../services/ai/progress.service");

exports.getImportProgress = (req, res) => {
  return res.status(200).json({
    success: true,
    progress: getProgress(),
  });
};