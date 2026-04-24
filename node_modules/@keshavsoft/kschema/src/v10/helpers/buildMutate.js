const buildMutate = (mutate, tableName) => ({
    insertAsIs: (record) =>
        mutate.insertAsIs({ table: tableName, record }),

    insertFlat: (record) =>
        mutate.insertFlat({ table: tableName, record }),

    insertGenPk: (record) =>
        mutate.insertGenPk({ table: tableName, record }),

    insertWithChecks: (record) =>
        mutate.insertWithChecks({ table: tableName, record }),

    deleteWithChecks: (pk) =>
        mutate.deleteWithChecks({ table: tableName, pk }),

    updateWithChecks: (pk, record) =>
        mutate.updateWithChecks({ table: tableName, pk, record })

});

export default buildMutate;