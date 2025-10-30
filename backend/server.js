import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/forecast", (req, res) => {
  const query = "SELECT * FROM crop_prices";
  db.query(query, (err, result) => {
    if (err) return res.status(500).send("Database error");
    res.json(result);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
