import { exec } from "child_process";

import express from "express";

import loadConfig from "./configLoader.js";
import setupRoutes from "./routes.js";
import startServer from "./server.js";

import { router as routerFromFromTally } from "./FromTally/routes.js";
import { router as routerFromApi } from "./Api/routes.js";

loadConfig();

const app = express()
app.use("/Api", routerFromApi);

app.use("/FromTally", routerFromFromTally);

setupRoutes(app);

const { port } = startServer(app);

if (process.env.OPEN_BROWSER === "true") {
    exec(`start http://localhost:${port}/Tally/Masters/V6/Ledgers/index.html`);
};