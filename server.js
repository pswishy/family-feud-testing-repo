const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const fs = require("fs");
const handle = app.getRequestHandler();

let httpsOptions = {};
var { createServer } = require("http");
if (dev) {
  var { createServer } = require("http");
  httpsOptions = {
    key: fs.readFileSync("./dev/cert/localhost.key"),
    cert: fs.readFileSync("./dev/cert/localhost.crt"),
  };
}

const PORT = process.env.PORT || 8000;
app.prepare().then(async () => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
