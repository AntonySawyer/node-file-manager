import * as readline from 'readline/promises';
import { FM_COMMANDS } from './constants/command.js';

import { CLI_ARGUMENT_NAME } from './constants/main.js';
import { initApp } from './modules/generalModule.js';
import { parseCliArgument } from './utils/arguments.js';
import { resolveCommand } from './utils/commands.js';
import { greetWithUser, sayByeToUser, sayWorkingDirectory } from './utils/messages.js';


initApp();

const userName = parseCliArgument(CLI_ARGUMENT_NAME.USERNAME);

greetWithUser(userName);
sayWorkingDirectory();

const readlineInterface = readline.createInterface(process.stdin, process.stdout);

readlineInterface.on('line', async (command) => {
  await resolveCommand(command);

  if (command === FM_COMMANDS.EXIT) {
    readlineInterface.close();
  } else {
    sayWorkingDirectory();
  }
});

readlineInterface.on('close', () => {
  sayByeToUser(userName);
});
