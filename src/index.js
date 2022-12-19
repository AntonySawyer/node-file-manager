import * as readline from 'readline/promises';
import { FM_COMMANDS } from './constants/command.js';

import { initApp } from './modules/generalModule.js';
import { resolveCommand } from './utils/commands.js';
import { sayByeToUser, sayWorkingDirectory } from './utils/messages.js';


const userName = initApp();

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
