import { getConfig } from "../../../core/configStore.js";
import { buildDataPath } from "../../../utils/pathBuilder.js";
import { getSchema } from "../../config/getSchema.js";

import { readData } from "../../helpers/file/read.js";
import { applyFilter } from "../../helpers/recordHelper.js";
import { validateFilterKeys } from "../../helpers/validateHelper.js";

const byColumns = ({ table, filter }) => {
    const cfg = getConfig();
    const schema = getSchema(table);

    validateFilterKeys(filter, schema.columns);

    const path = buildDataPath(cfg, table);
    const data = readData(path);

    return applyFilter(data, filter);
};

export default byColumns;