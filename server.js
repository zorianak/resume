/* eslint-disable */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

process.env.NODE_ENV = "production";

const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(process.env.PORT || 3000, "0.0.0.0", () => {
      console.log(`Server ready on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error("Failed to prepare app", err);
    process.exit(1);
  });
