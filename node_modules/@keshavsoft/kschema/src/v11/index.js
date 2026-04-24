import { loadConfig, getConfig } from "../core/configStore.js";

import * as query from "./engine/query/index.js";
import * as mutate from "./engine/mutate/index.js";

import buildMutate from "./helpers/buildMutate.js";
import buildQuery from "./helpers/buildQuery.js";

/**
 * @typedef {Object} MutateAPI
 * @property {(record: any) => any} insertAsIs
 * @property {(record: any) => any} insertFlat
 * @property {(record: any) => any} insertGenPk
 * @property {(record: any) => any} insertWithChecks
 * @property {(pk: any) => any} deleteWithChecks
 * @property {(pk: any, record: any) => any} updateWithChecks
 */

/**
 * @typedef {Object} AggregateAPI
 * @property {(column?: string) => any} count
 */

/**
 * @typedef {Object} QueryAPI
 * @property {Function} findAll
 * @property {Function} findByPk
 * @property {(id:any) => any[]} filterByPk
 * @property {(where:Object) => any[]} filterByColumns
 * @property {AggregateAPI} aggregate
 */

/**
 * @typedef {Object} TableAPI
 * @property {QueryAPI} query
 * @property {MutateAPI} mutate
 */


export const kschema = {
    loadConfig,
    getConfig,

    /**
     * @param {string} tableName
     * @returns {TableAPI}
     */
    table: (tableName) => {
        /** @type {QueryAPI} */
        const queryObj = buildQuery(query, tableName);

        /** @type {MutateAPI} */
        const mutateObj = buildMutate(mutate, tableName);

        return {
            query: queryObj,
            mutate: mutateObj
        };
    }
};