import express from "express";
import path from "path"
import { fileURLToPath } from "url";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import statsRouter from "./routes/statsRouter.js";
import badgeRouter from "./routes/badgeRouter.js";

const app = express();
const PORT = process.env.PORT || 5500;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Routes
app.use("/api/stats", statsRouter);
app.use("/api/badge", badgeRouter);

connectDB().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on: http://localhost:${PORT}`);
  });
});
