import { FM_COMMANDS, FM_COMMAND_TO_METHOD_MAP } from "../constants/command.js";
import { ERROR_EVENT, ERROR_MESSAGE } from "../constants/error.js";

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

export const resolveCommand = (context, commandFromCli) => {
  const { commandArguments, command } = parseCommandFromCliArg(commandFromCli);
  const isCommandAllowed = isCommandValid(command);

  if (!isCommandAllowed) {
    return process.emit(ERROR_EVENT.INVALID_COMMAND);
  }

  FM_COMMAND_TO_METHOD_MAP[command].execute.call(null, { context }, ...commandArguments);
};
