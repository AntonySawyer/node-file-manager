import { FM_COMMANDS, FM_COMMAND_TO_METHOD_MAP } from "../constants/command.js";


export const isCommandValid = (command) => {
  const VALID_COMMANDS = Object.values(FM_COMMANDS);
  const isValid = VALID_COMMANDS.includes(command);

  return isValid;
}


export const resolveCommand = (context, command) => {
  const isCommandAllowed = isCommandValid(command);

  if (!isCommandAllowed) {
    return
  }

  FM_COMMAND_TO_METHOD_MAP[command].execute.call(null, context);
};
