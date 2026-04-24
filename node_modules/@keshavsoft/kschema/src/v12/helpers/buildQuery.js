import * as aggregate from "../engine/query/aggregate/index.js";

const findAll = (query, tableName) => {
    const fn = () => query.findAll({ table: tableName });

    fn.meta = {
        name: "findAll",
        args: [],
        body: `
const tableData = table.query.findAll();

console.log("LedgerNames table data :", tableData);
`
    };

    return fn;
};

const findByPk = (query, tableName) => (id) =>
    query.findByPk({ table: tableName, id });

const filterByPk = (query, tableName) => (id) =>
    query.filterByPk({ table: tableName, id });

const filterByColumns = (query, tableName) => (where) =>
    query.filterByColumns({ table: tableName, where });

const buildQuery = (query, tableName) => ({
    findAll: findAll(query, tableName),
    findByPk: findByPk(query, tableName),
    filterByPk: filterByPk(query, tableName),
    filterByColumns: filterByColumns(query, tableName),

    aggregate: {
        count: () =>
            query.aggregate.count({ table: tableName })
    }
});

export default buildQuery;
