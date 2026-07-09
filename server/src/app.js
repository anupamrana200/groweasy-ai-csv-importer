const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/ai.routes");
const importRoutes = require("./routes/import.routes");
const progressRoutes = require("./routes/progress.routes");

const app = express();

// =========================
// Middlewares
// =========================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// =========================
// API Routes
// =========================

app.use("/api/import", importRoutes);

app.use("/api/progress", progressRoutes);

app.use("/api/ai", aiRoutes);

// =========================
// Health Check
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GrowEasy AI Importer Backend is running 🚀",
  });
});

// =========================
// 404 Handler
// =========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;