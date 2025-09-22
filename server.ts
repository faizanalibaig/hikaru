require("dotenv").config();

const http = require("http");
import express, { Request, Response } from "express";
const mongoose = require("mongoose");

const PATH = require("./helper/path");
const logger = require(`${PATH}/config/logger`);

const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

logger.info("Logger is configured");

mongoose
  .connect("mongodb://admin:root123$$@mongo:27017/hikaru")
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err: any) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "hello from hikaru",
    status: true,
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
