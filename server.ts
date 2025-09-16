require("dotenv").config();

const http = require("http");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
