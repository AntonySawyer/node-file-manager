import {
  handleExit,
  goToParentDir,
  goToPath,
  printListOfFilesAndFolders,
  catFile,
  addFile,
  renameFile
} from '../modules/index.js';

export const FM_COMMANDS = {
  EXIT: '.exit',
  UP: 'up',
  CD: 'cd',
  LS: 'ls',
  CAT_FILE: 'cat',
  ADD_FILE: 'add',
  RENAME_FILE: 'rn'
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
  },
  [FM_COMMANDS.ADD_FILE]: {
    execute: (...args) => addFile(...args)
  },
  [FM_COMMANDS.RENAME_FILE]: {
    execute: (...args) => renameFile(...args)
  }
};
