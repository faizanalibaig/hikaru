require("dotenv").config();

const http = require("http");
import express, { Request, Response } from "express";

const PATH = require("./helper/path");
const logger = require(`${PATH}/config/logger`);

const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

logger.info("Logger is configured");

app.route("/").get((req: Request, res: Response) => {
  res.json({
    message: "hello from hikaru",
    status: true,
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req: Request, res: Response): void => {});
