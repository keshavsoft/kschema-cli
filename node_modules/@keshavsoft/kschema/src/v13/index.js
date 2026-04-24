// src/v13/index.js

// ---------- imports ----------
import { loadConfig, getConfig } from "../core/configStore.js";
import schemaMeta from "./schema/schema.json" with { type: "json" };

import { buildKSchema } from "./core/buildKSchema.js";

import { argsSchema } from "./core/getArgs.js";
import { descSchema } from "./core/getDesc.js";
import { exampleSchema } from "./core/getExample.js";

// ---------- middle ----------
const built = buildKSchema();

/**
 * @type {{
 *  loadConfig: Function,
 *  getConfig: Function,
 *  table: typeof built.table
 * }}
 */
const kschema = {
    loadConfig,
    getConfig,
    table: built.table
};

// ---------- exports ----------
export {
    kschema,
    schemaMeta,
    argsSchema,
    descSchema,
    exampleSchema
};