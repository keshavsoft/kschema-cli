const buildMutate = (mutate, tableName) => ({
    insert: (record) =>
        mutate.insert({ table: tableName, record }),

    insertAsIs: (record) =>
        mutate.insertAsIs({ table: tableName, record }),

    insertFlat: (record) =>
        mutate.insertFlat({ table: tableName, record }),

    insertGenPk: (record) =>
        mutate.insertGenPk({ table: tableName, record })
});

export default buildMutate;