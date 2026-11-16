import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
