import { getConfig } from "../../../core/configStore.js";
import { buildDataPath } from "../../../utils/pathBuilder.js";
import { getSchema } from "../../config/getSchema.js";
import { getPrimaryKey } from "../../helpers/pkHelper.js";
import { readData } from "../../helpers/file/read.js";
import { writeData } from "../../helpers/file/write.js";

const byPk = ({ table, id }) => {
    const config = getConfig();
    const path = buildDataPath(config, table);

    const pk = getPrimaryKey(getSchema(table).columns);

    const data = readData(path);
    const idAsInt = parseInt(id);

    if (!data.some(item => item[pk] === idAsInt)) throw new Error(`${pk}: ${id} not found`);

    writeData(path, data.filter(item => item[pk] !== idAsInt));

    return true;
};

export default byPk;