import { loadConfig, getConfig } from "../core/configStore.js";
import * as query from "./engine/query/index.js";
import * as mutate from "./engine/mutate/index.js";

import buildMutate from "./helpers/buildMutate.js";   // ✅ new
import buildQuery from "./helpers/buildQuery.js";

export const kschema = {
    loadConfig,
    getConfig,

    table: (tableName) => ({
        query: buildQuery(query, tableName),
        mutate: buildMutate(mutate, tableName)   // ✅ clean
    })
};