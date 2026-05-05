import fs from "fs";
import path from "path";

// Prepares single ledger entry
const startFunc = ({ inLedgerName, inAmount }) => {
    const filePath = path.join("./Import/Templates", "ledgers.json");
    let template = fs.readFileSync(filePath, "utf8");

    let data = JSON.parse(template);

    data.ledgername = inLedgerName;
    data.amount = inAmount;

    return data;
};

export { startFunc };