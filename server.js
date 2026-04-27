import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// 測試首頁
app.get("/", (req, res) => {
  res.send("server running");
});

// 測試 API
app.post("/ocr", (req, res) => {
  res.json({ ok: true });
});

// 🔥 這行最重要
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});