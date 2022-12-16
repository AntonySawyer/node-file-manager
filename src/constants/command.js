import {
  handleExit,
  goToParentDir,
  goToPath,
  printListOfFilesAndFolders,
  catFile
} from '../modules/index.js';

export const FM_COMMANDS = {
  EXIT: '.exit',
  UP: 'up',
  CD: 'cd',
  LS: 'ls',
  CAT_FILE: 'cat'
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
  },
  [FM_COMMANDS.LS]: {
    execute: printListOfFilesAndFolders
  },
  [FM_COMMANDS.CAT_FILE]: {
    execute: (...args) => catFile(...args)
  }
};
