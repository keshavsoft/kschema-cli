import schemaMeta from "../schema/schema.json" with { type: "json" };

import * as query from "../engine/query/index.js";
import * as mutate from "../engine/mutate/index.js";

import buildMutate from "../helpers/buildMutate.js";
import buildQuery from "../helpers/buildQuery.js";

function table(tableName) {
  return {
    query: buildQuery(query, tableName),
    mutate: buildMutate(mutate, tableName)
  };
}

export function buildKSchema() {
  return { table };
};