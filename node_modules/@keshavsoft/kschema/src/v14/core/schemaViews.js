// src/v13/core/schemaViews.js

import schemaMeta from "../schema/schema.json" assert { type: "json" };

const mapDeep = (obj, fn) => {
    const out = {};
    for (const key in obj) {
        if (obj[key]?.args || obj[key]?.desc || obj[key]?.example) {
            out[key] = fn(obj[key]);
        } else {
            out[key] = mapDeep(obj[key], fn);
        }
    }
    return out;
};