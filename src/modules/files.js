import fs from 'fs/promises';

import { ERROR_EVENT } from '../constants/error.js';

export const catFile = async ({ context }, filePath) => {
  try {
    const fileReadStream = (await fs.open(filePath)).createReadStream({ encoding: 'utf-8' });

    fileReadStream.on('data', (chunk) => (
      console.log(chunk)
    ));
  } catch (error) {
    process.emit(ERROR_EVENT.EXECUTION_FAIL);
  }
};

export const addFile = async ({ context }, fileName) => {
  try {
    await fs.writeFile(fileName, '', { encoding: 'utf-8' });
  } catch (error) {
    process.emit(ERROR_EVENT.EXECUTION_FAIL);
  }
};

export const renameFile = async ({ context }, filePath, newFileName) => {
  try {
    await fs.rename(filePath, newFileName)
  } catch (error) {
    process.emit(ERROR_EVENT.EXECUTION_FAIL);
  }
};

export const copyFile = async (options, filePath, newFilePath) => {
  try {
    await addFile(options, newFilePath);
    const fileReadStream = (await fs.open(filePath)).createReadStream({ encoding: 'utf-8' });
    const fileWriteStream = (await fs.open(newFilePath, 'w')).createWriteStream({ encoding: 'utf-8' });

    fileReadStream.on('data', (chunk) => {
      fileWriteStream.write(chunk);
    });
  } catch (error) {
    process.emit(ERROR_EVENT.EXECUTION_FAIL);
  }
};

export const removeFile = async ({ context }, filePath) => {
  try {
    await fs.rm(filePath);
  } catch (error) {
    process.emit(ERROR_EVENT.EXECUTION_FAIL);
  }
};
