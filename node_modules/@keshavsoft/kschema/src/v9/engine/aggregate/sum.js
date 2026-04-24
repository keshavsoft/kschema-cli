import getAll from "../../storage/getAll.js";

const sum = ({ table, column }) => {
    const data = getAll({ table });

    return data.reduce((acc, item) => {
        return acc + (item[column] || 0);
    }, 0);
};

export default sum;