// src/v13/index.js

import { loadConfig, getConfig } from "../core/configStore.js";
import schemaMeta from "./schema/schema.json" with { type: "json" };

import { buildKSchema } from "./core/buildKSchema.js";

export const kschema = {
    loadConfig,
    getConfig,
    ...buildKSchema()
};

export { schemaMeta };
export { argsSchema } from "./core/getArgs.js";
export { descSchema } from "./core/getDesc.js";
export { exampleSchema } from "./core/getExample.js";