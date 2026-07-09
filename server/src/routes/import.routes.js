const express = require("express");

const upload = require("../middleware/upload.middleware");
const { importCsv } = require("../controllers/import.controller");

const router = express.Router();

router.post(
  "/",
  upload.single("csv"),
  importCsv
);

module.exports = router;