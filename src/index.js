import * as readline from 'readline/promises';

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

const contextForHandlers = {
  readlineInterface
}

readlineInterface.on('line', resolveCommand.bind(null, contextForHandlers));

readlineInterface.on('close', () => {
  sayByeToUser(userName);
});
