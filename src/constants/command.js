import { handleExit } from '../modules/index.js';

export const FM_COMMANDS = {
  EXIT: '.exit'
};

export const FM_COMMAND_TO_METHOD_MAP = {
  [FM_COMMANDS.EXIT]: {
    execute: (...args) => handleExit(...args)
  }
};
