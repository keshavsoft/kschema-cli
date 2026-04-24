import { getConfig } from "../../core/configStore.js";
import { buildDataPath } from "../../utils/pathBuilder.js";
import { writeData } from "../helpers/file/write.js";

const saveAll = ({ table, data }) => {
    const config = getConfig();

    const path = buildDataPath(config, table);

    writeData(path, data);

    return true;
};

export default saveAll;