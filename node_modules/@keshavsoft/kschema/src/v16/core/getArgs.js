// src/v13/core/getArgs.js

import schemaMeta from "../schema/schema.json" with { type: "json" };

const getArgs = (obj) => {
    const out = {};
    for (const k in obj) {
        if (obj[k]?.args) {
            out[k] = obj[k].args;
        } else {
            out[k] = getArgs(obj[k]);
        }
    }
    return out;
};

export const argsSchema = getArgs(schemaMeta);