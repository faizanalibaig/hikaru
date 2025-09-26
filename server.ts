require("dotenv").config();
require("module-alias/register");

const http = require("http");
import express from "express";
const mongoose = require("mongoose");
const morgan = require("morgan");

const logger = require(`@config/logger`);
const AppRoutes = require(`@routes/route`);

const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* mongoose
  .connect("mongodb://admin:root123$$@mongo:27017/hikaru")
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err: any) => {
    console.error("MongoDB connection error:", err);
  }); */

app.use(
  morgan("combined", {
    stream: {
      write: (message: string) => logger.info(message.trim()),
    },
  })
);

app.use("/api/v1", AppRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
