const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

const PORT = process.env.PORT || 8081;

// middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// render static files
server.use(express.static(__dirname + "/src/assets"));
server.use(express.static(__dirname + "/dist"));

server.listen(PORT, () => {
    console.log(`\n===API Running on port ${PORT}===\n`);
});
