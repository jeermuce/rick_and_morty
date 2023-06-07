const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url;
    if (url.includes("/rickandmorty/character")) {
    }
  })
  .listen(3001, "localhost");
