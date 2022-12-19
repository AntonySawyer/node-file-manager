import { FM_COMMANDS, FM_COMMANDS_NOT_FOR_RESOLVER, FM_COMMAND_TO_METHOD_MAP } from "../constants/command.js";
import { ERROR_CODE, ERROR_MESSAGE } from "../constants/error.js";
import { handleError } from '../utils/error.js';

const parseCommandFromCliArg = (cliCommand) => {
  const [command, ...rest] = cliCommand.split(' ');

  return {
    command,
    commandArguments: rest
  }
}

const isCommandValid = (command) => {
  const VALID_COMMANDS = Object.values(FM_COMMANDS);
  const isValid = VALID_COMMANDS.includes(command);

  return isValid;
}

const isResolverShouldSkipCommand = (command) => (
  FM_COMMANDS_NOT_FOR_RESOLVER.includes(command)
);

export const resolveCommand = async (commandFromCli) => {
  const { commandArguments, command } = parseCommandFromCliArg(commandFromCli);
  const isCommandAllowed = isCommandValid(command);

  if (!isCommandAllowed) {
    const error = new Error(ERROR_MESSAGE.INVALID_COMMAND);

    handleError(error, ERROR_CODE.INVALID_COMMAND);

    return;
  }

  const shouldSkip = isResolverShouldSkipCommand(command);

  if (shouldSkip) {
    return;
  }

  try {
    const commandHandler = FM_COMMAND_TO_METHOD_MAP[command];

    await commandHandler(...commandArguments);
  } catch (error) {
    handleError(error, ERROR_CODE.EXECUTION_FAIL);
  }
};
