import express from "express";
import compression from "compression";
import { Request, Response } from "express-serve-static-core";
import React, { ReactElement } from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "./src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("./dist/index.html").toString();
const parts = html.split("Not Rendered");

const app = express();

app.use(compression());
app.use("/", express.static("./dist"));
app.use((req: Request, res: Response) => {
  res.write(parts[0]);
  const reactMarkup: ReactElement = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const stream = renderToNodeStream(reactMarkup);
  stream.pipe(
    res,
    { end: false }
  );
  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

app.listen(PORT);
