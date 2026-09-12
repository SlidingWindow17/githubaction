import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Working fine2");
});

app.listen(3000);
