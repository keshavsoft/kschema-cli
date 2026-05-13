import { getDefaultKSTableConfig } from "./getDefaultKSTableConfig.js";

export const getKSTableConfig = async ({ tableName }) => {
    const config = getDefaultKSTableConfig();

    const fromPromise = await fetch("Index/columns.json");
    debugger;
    const columnsConfig = await fromPromise.json();

    config.columnsConfig = columnsConfig[tableName].columnsConfig;

    config.tableName = tableName;

    config.endPoints.read = `/Api/V1/${tableName}/ShowAll`;

    return config;
};