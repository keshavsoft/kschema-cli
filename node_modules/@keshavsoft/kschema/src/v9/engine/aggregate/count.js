import getAll from "../../storage/getAll.js";

const count = ({ table }) => {
    const data = getAll({ table });
    return data.length;
};

export default count;