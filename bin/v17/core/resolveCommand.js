import init from "../commands/init.js";
import test from "../commands/test.js";
import express from "../commands/express.js";
import tally from "../commands/tally.js";
import accounts from "../commands/accounts.js";

// resolveCommand.js
const map = {
    init,
    test,
    express,
    tally,
    accounts
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};