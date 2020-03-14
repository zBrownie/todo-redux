const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require('./routes')
const server = express();

mongoose.connect(
  "mongodb+srv://brownie:643512@cluster0-iwz84.mongodb.net/Todo?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes)

server.listen(3333, () => {
  console.log("RODANDO SERVER");
});
