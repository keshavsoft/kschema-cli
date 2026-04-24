// ---------- imports ----------
import { loadConfig, getConfig } from "../core/configStore.js";
import schemaMeta from "./schema/schema.json" with { type: "json" };

import { buildKSchema } from "./core/buildKSchema.js";

import { argsSchema } from "./core/getArgs.js";
import { descSchema } from "./core/getDesc.js";
import { exampleSchema } from "./core/getExample.js";

// ---------- middle ----------
const built = buildKSchema();

const kschema = {
    loadConfig,
    getConfig,
    table: (tableName) => built.table(tableName)
};

// ---------- exports ----------
export {
    kschema,
    schemaMeta,
    argsSchema,
    descSchema,
    exampleSchema
};