const wrapTable = (fn, table) => {
    return (input = {}) => {
        return fn({
            table,
            record: input
        });
    };
};

export default wrapTable;