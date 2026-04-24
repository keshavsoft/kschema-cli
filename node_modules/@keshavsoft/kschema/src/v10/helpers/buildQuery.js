const buildQuery = (query, tableName) => ({
    get: () =>
        query.get({ table: tableName }),

    findByPk: (id) =>
        query.findByPk({ table: tableName, id })
});

export default buildQuery;