// src/v13/core/getExample.js

import schemaMeta from "../schema/schema.json" with { type: "json" };

const getExample = (obj) => {
    const out = {};
    for (const k in obj) {
        if (obj[k]?.example) {
            out[k] = obj[k].example;
        } else {
            out[k] = getExample(obj[k]);
        }
    }
    return out;
};

export const exampleSchema = getExample(schemaMeta);