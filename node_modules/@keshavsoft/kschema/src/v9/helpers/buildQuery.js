const buildQuery = (query, tableName) => ({
    get: () =>
        query.get({ table: tableName }),

    findByPk: (id) =>
        query.findByPk({ table: tableName, id }),

    findByColumns: (filters) =>
        query.findByColumns({ table: tableName, filters })
});

export default buildQuery;