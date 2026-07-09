const express = require("express");

const upload = require("../middleware/upload.middleware");

const router = express.Router();

router.post(
  "/",
  upload.single("csv"),
  (req, res) => {

    res.json({
      success: true,

      file: req.file,
    });

  }
);

module.exports = router;