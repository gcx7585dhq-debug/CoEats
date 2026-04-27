import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("server running");
});

app.post("/ocr", async (req, res) => {
  res.json({ ok: true }); // 先測試用
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running");
});