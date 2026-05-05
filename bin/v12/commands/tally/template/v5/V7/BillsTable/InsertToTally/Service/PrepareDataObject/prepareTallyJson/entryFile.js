import fs from "fs";
import path from "path";

const startFunc = () => {
    try {
        const filePath = path.join("./Import/Templates", "template.json");
        let template = fs.readFileSync(filePath, "utf8");

        let data = JSON.parse(template);

        return data;
    } catch (err) {
        console.error("Import Failed");
        console.log(err.response?.data || err.message);
    };
};

export { startFunc };