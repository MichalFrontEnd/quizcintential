import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();
const port = 3001;

app.use(cors());

// Resolve the path to data.json
const dataPath = path.resolve(__dirname, "./data.json");

// Endpoint to serve the quiz data
app.get("/api/questions", (req: Request, res: Response) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
