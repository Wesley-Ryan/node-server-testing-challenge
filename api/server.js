const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./users/user-routes");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("tiny"));
server.use("/users", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
