import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import statsRouter from "./routes/statsRouter.js";

const app = express();
const PORT = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Routes
app.use("/api/stats", statsRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
  });
});
