import os from 'os';

import { sayWorkingDirectory } from '../utils/messages.js';

const changeDir = (targetDir) => {
  process.chdir(targetDir);
  sayWorkingDirectory();
}

export const getStartDir = () => (
  os.homedir()
)

export const goToParentDir = () => {
  changeDir('../');
}

export const goToPath = ({ commandArguments: path }) => {
  changeDir(path);
}