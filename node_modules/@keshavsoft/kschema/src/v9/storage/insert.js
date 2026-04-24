import saveAll from "./saveAll.js";

const insert = ({ table, data }) => {
    saveAll({ table, data });
    return true;
};

export default insert;