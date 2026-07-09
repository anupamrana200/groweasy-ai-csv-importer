
const express = require("express");
const cors = require("cors");

const importRoutes = require("./routes/import.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api/import", importRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GrowEasy AI Importer Backend is running 🚀",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;