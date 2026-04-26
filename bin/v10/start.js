import showUsage from './core/showUsage.js';
import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = async () => {
  if (!command) {
    console.log(`Unknown command: ${input.cmd}\n`);

    return showUsage(version);
  }

  await command(input);
};

export default run;