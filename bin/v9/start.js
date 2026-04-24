import parseInput from "./core/parseInput.js";
import resolveCommand from "./core/resolveCommand.js";

/*
KSchema CLI – Entry Flow

1. Read user input from terminal (parseInput)
2. If no command → show usage (first-time user safety)
3. If help flags → show usage (quick guidance)
4. Resolve command dynamically (no hardcoding logic)
5. If command not found → inform + guide back to usage
6. Execute command with parsed input

Goal:
- Zero confusion for user
- Single source of truth (showUsage)
- Easy to extend (just add commands, no core changes)
*/

const run = async () => {
    const input = parseInput();

    if (!input.cmd) return showUsage();

    if (input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") return showUsage();

    const command = resolveCommand(input.cmd);

    if (!command) return (console.log(`Unknown command: ${input.cmd}\n`), showUsage());

    await command(input);
};

export default run;

const showUsage = () => {
    const g = "\x1b[32m";
    const y = "\x1b[33m";
    const c = "\x1b[36m";
    const gray = "\x1b[90m";
    const r = "\x1b[0m";

    console.log(`
${c}🚀 KSchema CLI v1.9.3${r}

${y}Usage:${r}
  ${g}npx @keshavsoft/kschema-cli${r} <command> [options]

// inside showUsage()
${y}Commands:${r}
  ${g}init${r}              🛠  Initialize a new schema setup
  ${g}test${r}              ✅  Run schema validations/tests
  ${g}generate-samples${r}  📦  Generate sample schema files
  
${y}Examples:${r}
  ${gray}npx @keshavsoft/kschema-cli init${r}
  ${gray}npx @keshavsoft/kschema-cli test users${r}

${y}Tip:${r}
  💡 npm i -g @keshavsoft/kschema-cli
     ${g}kschema${r} <command>
`);
};