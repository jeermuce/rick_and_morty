//server.js
const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    const id = Number(url.split("/").at(-1));
    const character = data.find((character) => character.id === id);
    if (character) {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Character not found" }));
    }
  })
  .listen(3001, "localhost");
