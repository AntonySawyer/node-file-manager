import fs from 'fs/promises';

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
