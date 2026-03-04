(async () => {
  const [{ createServer }, { parse }, nextModule] = await Promise.all([
    import("node:http"),
    import("node:url"),
    import("next"),
  ]);

  if (process.env.NODE_ENV && process.env.NODE_ENV !== "production") {
    throw new Error('This server is production-only. Set NODE_ENV to "production".');
  }
  process.env.NODE_ENV = "production";

  const next = nextModule.default;
  const dev = false;
  const host = process.env.HOST || "0.0.0.0";
  const port = Number.parseInt(process.env.PORT || "3000", 10);

  const app = next({ dev, hostname: host, port });
  const handle = app.getRequestHandler();

  await app.prepare();

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, host, () => {
    console.log(`Next.js server ready on http://${host}:${port}`);
  });
})().catch((err) => {
  console.error("Failed to start Next.js server", err);
  process.exit(1);
});
