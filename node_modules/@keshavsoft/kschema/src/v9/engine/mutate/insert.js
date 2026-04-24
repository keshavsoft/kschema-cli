import { getConfig } from "../../../core/configStore.js";
import { buildDataPath } from "../../../utils/pathBuilder.js";
import { getSchema } from "../../config/getSchema.js";

import { getPrimaryKey, attachPrimaryKey } from "../../helpers/pkHelper.js";

import { readData } from "../../helpers/file/read.js";
import { writeData } from "../../helpers/file/write.js";

import { validateRecord } from "../../helpers/validateHelper.js";
import { normalizeRecord } from "../../helpers/recordHelper.js";

const insert = ({ table, record }) => {
    const config = getConfig();
    const schema = getSchema(table);

    const pk = getPrimaryKey(schema.columns);
    const path = buildDataPath(config, table);

    const data = readData(path);

    const cleanRecord = { ...record };

    validateRecord(cleanRecord, schema.columns, data);

    const newRecord = attachPrimaryKey(cleanRecord, pk, data);

    data.push(newRecord);

    writeData(path, data);

    return newRecord[pk];
};

export default insert;