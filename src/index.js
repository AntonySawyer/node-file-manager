import * as readline from 'readline/promises';

import { CLI_ARGUMENT_NAME } from './constants/main.js';
import { parseCliArgument } from './utils/arguments.js';
import { resolveCommand } from './utils/commands.js';
import { greetWithUser, sayByeToUser } from './utils/messages.js';

const userName = parseCliArgument(CLI_ARGUMENT_NAME.USERNAME);

greetWithUser(userName);

const readlineInterface = readline.createInterface(process.stdin, process.stdout);

const contextForHandlers = {
  readlineInterface
}

readlineInterface.on('line', resolveCommand.bind(null, contextForHandlers));

readlineInterface.on('close', () => {
  sayByeToUser(userName);
});
