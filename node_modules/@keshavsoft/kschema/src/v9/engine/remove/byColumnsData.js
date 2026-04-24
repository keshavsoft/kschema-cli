import { getConfig } from "../../../core/configStore.js";
import { buildDataPath } from "../../../utils/pathBuilder.js";
import { writeData } from "../../helpers/file/write.js";
import { applyFilter } from "../../helpers/recordHelper.js";

import { readData } from "../../helpers/file/read.js";

const byColumns = ({ table, filter }) => {
    const config = getConfig();
    const path = buildDataPath(config, table);
    const data = readData(path);

    const toDelete = applyFilter(data, filter);
    if (toDelete.length === 0) throw new Error(`No records match filter`);

    const newData = data.filter(item => !toDelete.includes(item));
    writeData(path, newData);

    return toDelete.length;
};

export default byColumns;