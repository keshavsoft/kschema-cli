import express from "express";

import loadConfig from "./configLoader.js";
import setupRoutes from "./routes.js";
import startServer from "./server.js";

loadConfig();

const app = express()

setupRoutes(app);
startServer(app);