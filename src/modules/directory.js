import os from 'os';
import fs from 'fs/promises';

import { DIR_ENTRY_TYPE } from '../constants/main.js';

const changeDir = (targetDir) => {
  process.chdir(targetDir);
}

export const getStartDir = () => (
  os.homedir()
)

export const goToParentDir = () => {
  changeDir('../');
}

export const goToPath = (path) => {
  changeDir(path);
}

const comparatorByTypeAndName = (firstEntry, secondEntry) => {
  if (firstEntry.type === secondEntry.type) {
    return firstEntry.name.localeCompare(secondEntry.name);
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

    const tableData = dirFilesAndFolders
      .sort(comparatorByTypeAndName);

    console.table(tableData);
  } catch (error) {
    throw new Error(error);
  }
}
