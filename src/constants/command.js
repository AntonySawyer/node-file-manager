import {
  goToParentDir,
  goToPath,
  printListOfFilesAndFolders,
  catFile,
  addFile,
  renameFile,
  copyFile,
  removeFile,
  moveFile,
  getOsInfo,
  printFileHash,
  compress,
  decompress
} from '../modules/index.js';

export const FM_COMMANDS = {
  EXIT: '.exit',
  UP: 'up',
  CD: 'cd',
  LS: 'ls',
  CAT_FILE: 'cat',
  ADD_FILE: 'add',
  RENAME_FILE: 'rn',
  COPY_FILE: 'cp',
  REMOVE_FILE: 'rm',
  MOVE_FILE: 'mv',
  OS: 'os',
  HASH: 'hash',
  COMPRESS: 'compress',
  DECOMPRESS: 'decompress'
};

export const FM_COMMANDS_NOT_FOR_RESOLVER = [
  FM_COMMANDS.EXIT
];

export const FM_COMMAND_TO_METHOD_MAP = {
  [FM_COMMANDS.UP]: goToParentDir,
  [FM_COMMANDS.CD]: goToPath,
  [FM_COMMANDS.LS]: printListOfFilesAndFolders,
  [FM_COMMANDS.CAT_FILE]: catFile,
  [FM_COMMANDS.ADD_FILE]: addFile,
  [FM_COMMANDS.RENAME_FILE]: renameFile,
  [FM_COMMANDS.COPY_FILE]: copyFile,
  [FM_COMMANDS.REMOVE_FILE]: removeFile,
  [FM_COMMANDS.MOVE_FILE]: moveFile,
  [FM_COMMANDS.OS]: getOsInfo,
  [FM_COMMANDS.HASH]: printFileHash,
  [FM_COMMANDS.COMPRESS]: compress,
  [FM_COMMANDS.DECOMPRESS]: decompress
};
