import fs from "fs";


export const applyFilter = (data, filter) => {
    return data.filter(row =>
        Object.keys(filter).every(key => row[key] === filter[key])
    );
};