require("dotenv").config();

import http from "http";
import express, { Request, Response } from "express";

// npm i --save-dev @types/express

const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

app.get("/", (req: Request, res: Response) => {});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
