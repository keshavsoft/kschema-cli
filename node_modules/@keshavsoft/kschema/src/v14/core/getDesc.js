// src/v13/core/getDesc.js

import schemaMeta from "../schema/schema.json" with { type: "json" };

const getDesc = (obj) => {
    const out = {};
    for (const k in obj) {
        if (obj[k]?.desc) {
            out[k] = obj[k].desc;
        } else {
            out[k] = getDesc(obj[k]);
        }
    }
    return out;
};

export const descSchema = getDesc(schemaMeta);