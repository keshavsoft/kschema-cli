import init from "../commands/init.js";
import test from "../commands/test.js";
import generateSamples from "../commands/generateSamples.js";
import express from "../commands/express.js";

// resolveCommand.js
const map = {
    init,
    test,
    "generate-samples": generateSamples,
    express
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};