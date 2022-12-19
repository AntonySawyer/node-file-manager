import { CLI_ARGUMENT_NAME } from '../constants/main.js';
import { parseCliArgument } from '../utils/arguments.js';
import { greetWithUser, sayWorkingDirectory } from '../utils/messages.js';
import { getStartDir } from './index.js';

export const initApp = () => {
  const startDir = getStartDir();
  const userName = parseCliArgument(CLI_ARGUMENT_NAME.USERNAME);

  process.chdir(startDir);

  greetWithUser(userName);
  sayWorkingDirectory();

  return userName;
}
