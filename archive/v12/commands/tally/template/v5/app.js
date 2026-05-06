import { exec } from "child_process";
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import express from "express";

import loadConfig from "./configLoader.js";
import setupRoutes from "./routes.js";
import startServer from "./server.js";

import { router as routerFromFromTally } from "./FromTally/routes.js";
import { router as routerFromApi } from "./Api/routes.js";
import { router as routerFromV7 } from "./V7/routes.js";
import { router as routerFromV8 } from "./V8/routes.js";

loadConfig();

const app = express()
app.use("/V8", routerFromV8);
app.use("/V7", routerFromV7);
app.use("/Api", routerFromApi);

app.use("/FromTally", routerFromFromTally);

setupRoutes(app);

const { port } = startServer(app);

if (process.env.OPEN_BROWSER === "true") {
    exec(`start http://localhost:${port}/Tally/Masters/V6/Ledgers/index.html`);
};