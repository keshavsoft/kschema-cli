import init from "../commands/init.js";
import test from "../commands/test.js";
import generateSamples from "../commands/generateSamples.js";
import express from "../commands/express.js";
import tally from "../commands/tally.js";
import accounts from "../commands/accounts.js";

// resolveCommand.js
const map = {
    init,
    test,
    "generate-samples": generateSamples,
    express,
    tally,
    accounts
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};