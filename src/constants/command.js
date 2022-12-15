import {
  handleExit,
  goToParentDir,
  goToPath
} from '../modules/index.js';

export const FM_COMMANDS = {
  EXIT: '.exit',
  UP: 'up',
  CD: 'cd'
};

export const FM_COMMAND_TO_METHOD_MAP = {
  [FM_COMMANDS.EXIT]: {
    execute: (...args) => handleExit(...args)
  },
  [FM_COMMANDS.UP]: {
    execute: goToParentDir
  },
  [FM_COMMANDS.CD]: {
    execute: (...args) => goToPath(...args)
  }
};
