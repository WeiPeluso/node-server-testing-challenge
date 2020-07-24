const express = require("express");

const server = express();

server.use(express.json());

const studentServer = require("./students/students-server");

server.use("/students", studentServer);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
