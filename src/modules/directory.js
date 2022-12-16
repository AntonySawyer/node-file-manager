import os from 'os';
import fs from 'fs/promises';

import { sayWorkingDirectory } from '../utils/messages.js';
import { ERROR_EVENT } from '../constants/error.js';
import { DIR_ENTRY_TYPE } from '../constants/main.js';

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

export const goToPath = ({ context }, path) => {
  changeDir(path);
}

const sortDirEntryByType = (firstEntry, secondEntry) => {
  if (firstEntry.type === secondEntry.type) {
    return 0
  }

  return firstEntry.type === DIR_ENTRY_TYPE.FILE ? 1 : -1
}

export const printListOfFilesAndFolders = async () => {
  try {
    const dirEntry = await fs.readdir(process.cwd(), { withFileTypes: true });

    const dirFilesAndFolders = dirEntry.map((el) => ({
      name: el.name,
      type: el.isFile() ? DIR_ENTRY_TYPE.FILE : DIR_ENTRY_TYPE.DIRECTORY
    }));

    const tableData = dirFilesAndFolders.sort(sortDirEntryByType);
    console.table(tableData);
  } catch (error) {
    process.emit(ERROR_EVENT.EXECUTION_FAIL);
  }
}
