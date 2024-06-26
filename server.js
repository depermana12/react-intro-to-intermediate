import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import renderApp from "./dist/server/ServerApp.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(
  path.resolve(__dirname, "./dist/client/index.html"),
  "utf-8",
);

const parts = html.split("separator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/assets",
  express.static(path.resolve(__dirname, "./dist/client/assets")),
);
app.use((req, res) => {
  res.write(parts[0]);

  const stream = renderApp(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError() {
      // errr handling here
    },
    onAllReady() {
      res.write(parts[1]);
      res.end();
    },
    onError(err) {
      console.error(err);
    },
  });
});

app.listen(PORT, () =>
  console.log(`Running server on http://localhost:${PORT}`),
);
